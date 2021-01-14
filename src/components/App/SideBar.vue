<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
<!--    <div class="logo" style="color: white; display:flex; justify-content: center; align-items: center">ФССП</div>-->
<!--    <LikeFilled style="color:white; font-size: 64px;" />-->
    <div class="logo" style=" background: transparent; color: white; display:flex; justify-content: center; align-items: center;"><template v-show="collapsed">sadf</template> ФССП</div>
<!--    <div class="logo" style=" background: transparent; color: white; display:flex; justify-content: center; align-items: center;"><UserOutlined style="color:white; font-size: 64px;" /></div>-->
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <user-outlined />
        <span>Загрузка реестра взысканий</span>
      </a-menu-item>
<!--      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>-->
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LikeFilled,
} from "@ant-design/icons-vue";

export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LikeFilled,
  },
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: true,
      height: 200,
    };
  },
};
</script>

<style scoped>
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
