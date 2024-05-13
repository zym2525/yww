export enum EditorType {
  /**
   * 文本
   */
  Text,
  /**
   * 图片
   */
  Image,
  /**
   * 视频
   */
  Video,
}

export const EditorTypeText = {
  [EditorType.Text]: '文本',
  [EditorType.Image]: '图片',
};

export const EmptyTextEditorItem = { type: EditorType.Text, content: '', sequence: 0 };

export const EmptyPriceVersion = {
  name: '通用版',
  price: '',
  chargeWay: '',
  sequence: 0,
} as API.PriceVersionInfoItem;
