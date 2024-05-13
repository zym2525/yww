import { Portal, Model } from '@/components';
import { PortalNode } from '@/components/Portal/portal';
import { ExtractPropTypes } from 'vue';
// import NewPromptOneLine from '@/components/MessageBox/NewPromptOneLine.vue';
import { VNode } from 'vue';
import { omit } from 'lodash';

type InputInstance = any; // InstanceType<typeof Input>;

type InputProps = ExtractPropTypes<InputInstance['$props']>;

type PromptOptions = {
  title?: string;
  inputProps?: Partial<InputProps>;
  onConfirm?: (value: string, done: () => any) => any;
  showCount?: boolean;
  confirmText?: string;
};

type ConfirmOptions = {
  title?: string;
  message?: string | VNode;
  confirmText?: string;
};

export class Message {
  static confirm(options: ConfirmOptions = {}) {
    // const { title = '提示', message = '确定要删除该数据吗?', confirmText = '确认' } = options;
    // return new Promise((resolve, reject) => {
    //   Portal.add((key) => {
    //     return (
    //       //@ts-ignore
    //       <Portal.Container keyNumber={key} delayOpen>
    //         {{
    //           default: ({ open, onClose }) => (
    //             //@ts-ignore
    //             <Model
    //               title={title}
    //               visible={open.value}
    //               content={message}
    //               onCancel={() => {
    //                 onClose();
    //                 reject();
    //               }}
    //               onConfirm={() => {
    //                 onClose();
    //                 resolve(1);
    //               }}
    //               confirmText={confirmText}
    //             ></Model>
    //           ),
    //         }}
    //       </Portal.Container>
    //     );
    //   });
    // });
  }
  static success(msg: string, options: Partial<PortalNode> = {}) {
    Portal.add((key) => {
      const _options = omit(options, ['onClose']);
      return {
        portalType: 'toast',
        message: msg,
        type: 'success',
        onClose: () => {
          Portal.remove(key);
        },
        ..._options,
      };
    });
  }
  static error(msg: string, options: Partial<PortalNode> = {}) {
    Portal.add((key) => {
      const _options = omit(options, ['onClose']);
      return {
        portalType: 'toast',
        message: msg,
        type: 'error',
        onClose: () => {
          Portal.remove(key);
        },
        ..._options,
      };
    });
  }
  static warning(msg: string, options: Partial<PortalNode> = {}) {
    Portal.add((key) => {
      const _options = omit(options, ['onClose']);
      return {
        portalType: 'toast',
        message: msg,
        type: 'warning',
        onClose: () => {
          Portal.remove(key);
        },
        ..._options,
      };
    });
  }

  static newPromptOneLine(options: PromptOptions) {
    // function handleConfirm(v, onClose) {
    //   options.onConfirm?.(v, onClose);
    // }
    // Portal.add((key) => {
    //   return (
    //     //@ts-ignore
    //     <Portal.Container keyNumber={key} delayOpen>
    //       {{
    //         default: ({ open, onClose }) => (
    //           //@ts-ignore
    //           <NewPromptOneLine
    //             visible={open.value}
    //             onUpdate:visible={(value) => !value && onClose()}
    //             title={options.title}
    //             inputProps={options.inputProps}
    //             showCount={options.showCount}
    //             confirmText={options.confirmText}
    //             onOnClose={onClose}
    //             onConfirm={(v) => handleConfirm(v, onClose)}
    //           ></NewPromptOneLine>
    //         ),
    //       }}
    //     </Portal.Container>
    //   );
    // });
  }
}
