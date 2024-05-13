// import './index.scss';

// import { SetupContext } from 'vue';
// import { View, Text, Image } from '@tarojs/components';
// import Taro from '@tarojs/taro';
// import { useSystemStore } from '@/stores/modules/system';
// import { storeToRefs } from 'pinia';
// import { TabBarPageRouter } from '@/constants';
// import IconPublish from '@/assets/tabbar/icon-publish.png';
// import { useUser, useIsLogin } from '@/hooks';
// import { Message } from '@/utils';

// type TarBarItemProps = {
//   text: string;
//   icon: string;
//   activeIcon: string;
//   pagePath: string;
//   active: boolean;
//   className: string;
//   onClick?: (url: string, index: number) => any;
//   index: number;
// };

// type TarBarItemEvents = {
//   click: (url: string, index: number) => any;
// };

// const TarBarItem = function (props: TarBarItemProps, context: SetupContext<TarBarItemEvents>) {
//   return (
//     <div
//       class={['bottom-tab-item', { active: props.active }, props.className]}
//       onClick={() => context.emit('click', props.pagePath, props.index)}
//     >
//       <img class="bottom-tab-item-icon" src={props.active ? props.activeIcon : props.icon} />
//       <div class="bottom-tab-item-text">{props.text}</div>
//     </div>
//   );
// };

// TarBarItem.emits = {
//   click: (url: string, index: number) => typeof url === 'string',
// };

// const whitePageList = [RouterPath.home, RouterPath.product, RouterPath.information];

// export default {
//   name: 'CustomTabBar',
//   components: {
//     View,
//     Text,
//     Image,
//     TarBarItem,
//   },
//   setup() {
//     const system = useSystemStore();
//     const { IPhoneXPadding } = storeToRefs(system);

//     // const { userDetail } = useUser();

//     const isLogin = useIsLogin();

//     const loginTipShowed = ref(false);

//     const switchTab = (url: string, index: number) => {
//       if (!isLogin.value && whitePageList.every((x) => x !== url)) {
//         if (!loginTipShowed.value) {
//           loginTipShowed.value = true;
//           Message.confirm({ message: '请前往登录' })
//             .then(() => {
//               Taro.navigateTo({
//                 url: `${RouterPath.authorization}?redirect=${url}`,
//               });
//             })
//             .finally(() => {
//               loginTipShowed.value = false;
//             });
//         }
//         return;
//       }
//       system.setTabIndex(index);
//       Taro.switchTab({ url });
//     };

//     function goPublish() {
//       if (!isLogin.value) {
//         if (!loginTipShowed.value) {
//           loginTipShowed.value = true;
//           Message.confirm({ message: '请前往登录' })
//             .then(() => {
//               Taro.navigateTo({
//                 url: `${RouterPath.authorization}?redirect=${RouterPath.home}`,
//               });
//             })
//             .finally(() => {
//               loginTipShowed.value = false;
//             });
//         }

//         return;
//       }
//       Taro.navigateTo({
//         url: RouterPath.publish,
//       });
//     }

//     return () => {
//       return (
//         <View
//           class="bottom-tab"
//           style={{
//             paddingBottom: `${IPhoneXPadding.value}px`,
//           }}
//         >
//           <TarBarItem
//             text="首页"
//             icon="../assets/tabbar/icon-home.png"
//             activeIcon="../assets/tabbar/icon-home-active.png"
//             pagePath={TabBarPageRouter.Home}
//             index={0}
//             active={system.activeTab === 0}
//             className="home"
//             onClick={switchTab}
//           ></TarBarItem>
//           <TarBarItem
//             text="产品"
//             icon="../assets/tabbar/icon-product.png"
//             activeIcon="../assets/tabbar/icon-product-active.png"
//             pagePath={TabBarPageRouter.Product}
//             active={system.activeTab === 1}
//             className="follow"
//             onClick={switchTab}
//             index={1}
//           ></TarBarItem>

//           <div class="bottom-tab-item publish-wrapper" onClick={goPublish}>
//             <img class="bottom-tab-item-img-publish" src={IconPublish} />
//             <div class="bottom-tab-item-text">发布</div>
//           </div>
//           <TarBarItem
//             text="资讯"
//             icon="../assets/tabbar/icon-information.png"
//             activeIcon="../assets/tabbar/icon-information-active.png"
//             pagePath={TabBarPageRouter.Information}
//             active={system.activeTab === 2}
//             className="message"
//             onClick={switchTab}
//             index={2}
//           ></TarBarItem>
//           <TarBarItem
//             text="我的"
//             icon="../assets/tabbar/icon-mine.png"
//             activeIcon="../assets/tabbar/icon-mine-active.png"
//             pagePath={TabBarPageRouter.Mine}
//             active={system.activeTab === 3}
//             className="mine"
//             onClick={switchTab}
//             index={3}
//           ></TarBarItem>
//         </View>
//       );
//     };
//   },
// };
