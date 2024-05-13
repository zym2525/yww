import {
  useInfiniteQuery,
  QueryKey,
  useMutation,
  useQueryClient,
  InfiniteData,
} from '@tanstack/vue-query';
import { UnwrapNestedRefs, Ref } from 'vue';

type BaseData<T = any> = {
  data?: T[];
  objectData?: any;
  pageModel?: {
    rows?: number;
    page?: number;
    totalCount?: number;
    totalPage?: number;
  };
};

export interface OrderInput {
  property?: string;
  order?: number;
}

export type ExtraParams = {
  [key: string]: any;
  orderByProperty?: string;
};

export type ServiceContext = {
  pageParam?: any;
  signal?: AbortSignal;
  pageSize?: number;
};

type Service<TData> = (context: ServiceContext) => Promise<TData>;

type UseInfiniteLoadingOptions<T, TExtraParams extends ExtraParams> = {
  enabled?: Ref<boolean> | boolean;
  queryKey?: QueryKey;
  onSuccess?: (data: InfiniteData<BaseData<T>>) => void;
  onRefetch?: () => any;
  useLocalData?: boolean;
  refeshDidShow?: boolean;
  pageSize?: number;
};

function delay(timeout = 300) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export function useInfiniteLoading<T, TExtraParams extends ExtraParams>(
  service: Service<BaseData<T>>,
  options: UseInfiniteLoadingOptions<T, TExtraParams> = {}
) {
  const {
    enabled = ref(true),
    queryKey,
    onSuccess,
    onRefetch: _onRefetch,
    useLocalData = false,
    refeshDidShow = true,
    pageSize = 20,
  } = options;

  const localData = ref({
    pageParams: [],
    pages: [],
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
    isInitialLoading,
  } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: async ({ pageParam = 1, signal }) => {
      let res = await Promise.all([service({ pageParam, signal, pageSize }), delay()]);
      return res[0];
    },
    // initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (
        (lastPage.pageModel.page - 1) * lastPage.pageModel.rows + lastPage.data.length <
          lastPage.pageModel.totalCount &&
        lastPage.pageModel.totalCount > 0
      ) {
        return lastPage.pageModel.page + 1;
      }
    },
    enabled: enabled,
    onSuccess(data) {
      localData.value.pageParams = data.pageParams;
      //@ts-ignore
      localData.value.pages = data.pages;

      const lastPage = data.pages[data.pages.length - 1];
      paging.value.complete(lastPage.data);
      onSuccess?.(data);
    },
    onError() {
      paging.value.complete(false);
    },
  });

  const _data = computed<InfiniteData<BaseData<T>>>(() =>
    useLocalData ? (localData.value as any) : data.value
  );

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: ({ pageParam }: ServiceContext) => fetchNextPage(pageParam),
  });

  const { mutate: setListItem } = useMutation({
    mutationFn: (data: { dataKey?: string; data: Partial<T> }) => {
      return Promise.resolve(data);
    },
    onSuccess: ({ dataKey = 'id', data }) => {
      console.log('dataKey: ', data);
      const pagesArray: InfiniteData<BaseData<T>> = useLocalData
        ? localData.value
        : queryClient.getQueryData(queryKey);
      console.log('pagesArray: ', pagesArray);
      const newPagesArray =
        pagesArray?.pages.map((page) => {
          return {
            ...page,
            data: page.data.map((item) => {
              if (item[dataKey] === data[dataKey]) {
                return {
                  ...item,
                  ...data,
                };
              } else {
                return item;
              }
            }),
          };
        }) ?? [];
      if (useLocalData) {
        console.log('newPagesArray: ', newPagesArray);
        localData.value.pageParams = pagesArray.pageParams;
        localData.value.pages = newPagesArray;
      } else {
        queryClient.setQueryData(queryKey, () => ({
          pages: newPagesArray,
          pageParams: pagesArray.pageParams,
        }));
      }
    },
  });

  async function onRefetch() {
    _onRefetch?.();
    return paging.value?.reload?.(true);
  }

  const infiniteLoadingRef = ref(null);

  const paging = computed(() => infiniteLoadingRef.value?.paging);

  // watchEffect(() => {
  //   if (isFetching.value) {
  //     console.log('isLoading');
  //   }
  //   // if
  // });

  async function queryList(pageNo: number, pageSize: number) {
    if (pageNo > 1) {
      await fetchNextPage();
    } else {
      if (!unref(enabled)) {
        return;
      }
      // await refetch();
      await refetch({ refetchPage: (page, index) => index === 0 });
      queryClient.setQueryData<InfiniteData<BaseData<T>>>(queryKey, (data) => ({
        pages: data.pages.slice(0, 1),
        pageParams: data.pageParams.slice(0, 1),
      }));
    }
  }

  const infiniteLoadingProps = computed(() => ({
    // fetchNextPage,
    // listData: _data.value,
    // // error: error.value,
    // hasMore: hasNextPage.value,
    // isFetching: isFetching.value,
    // isFetchingNextPage: isFetchingNextPage.value,
    // isLoading: isLoading.value,
    // isError: !!isError.value,
    // refetch: onRefetch,
    pageSize: pageSize,

    dataList: flattenListData.value,
    queryList: queryList,
    refetch: onRefetch,
  }));

  const flattenListData = computed(() => {
    let list: BaseData<T>['data'] = [];
    if (data && _data.value) {
      _data.value?.pages.forEach((group) => {
        group.data.forEach((item) => {
          list.push(item);
        });
      });
    }
    return list;
  });

  if (refeshDidShow) {
    useRefeshDidShow({ queryKey: queryKey });
  }

  return {
    infiniteLoadingProps,
    flattenListData,
    mutateAsync,
    setListItem,
    cancel: () => queryClient.cancelQueries(queryKey),
    infiniteLoadingRef: infiniteLoadingRef,
  };
}

type UseRefeshDidShowOptions = {
  queryKey: QueryKey;
};

export function useRefeshDidShow({ queryKey }: UseRefeshDidShowOptions) {
  const queryClient = useQueryClient();
  const showUpdate = ref(false);

  onShow(() => {
    if (showUpdate.value) {
      queryClient.invalidateQueries({
        queryKey: queryKey,
      });
    }
  });

  onHide(() => {
    showUpdate.value = true;
  });

  onUnload(() => {
    showUpdate.value = false;
  });
}
