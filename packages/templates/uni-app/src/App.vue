<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useSystemStore } from '@/stores/modules/system';

function updateVersions() {
  const updateManager = uni.getUpdateManager();
  updateManager.onCheckForUpdate(function (_res) {
    // 请求完新版本信息的回调
  });
  updateManager.onUpdateReady(function () {
    uni.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate();
        }
      },
    });
  });
  updateManager.onUpdateFailed(function () {
    // 新的版本下载失败
    uni.showToast({
      title: '新的版本下载失败,请重新进入',
      icon: 'none',
      duration: 2000,
    });
  });
}

const system = useSystemStore();

onLaunch((options) => {
  // 如果是收藏进入
  if (options.query.collect) {
    uni.reLaunch({
      url: '/pages/index/index',
    });
    return;
  }
  // 将启动参数放进到全局去
  system.init(options);
  system.setInfo(uni.getSystemInfoSync());
});
onShow(() => {
  updateVersions();
});
onHide(() => {
  console.log('App Hide');
});
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-plus/index.scss';
</style>
