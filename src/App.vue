<template>
  <alert />
  <a-layout id="components-layout-demo-custom-trigger">
    <side-bar :collapsed="collapsed"/>
    <a-layout>
      <the-header @switch-collapsed="switchCollapsed" />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#ececec',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {ref} from "vue";
import TheHeader from "@/components/App/TheHeader";
import SideBar from "@/components/App/SideBar";

import Alert from './components/App/Alert'

export default {
  components: {
    TheHeader,
    SideBar,
    Alert,
  },
  setup () {
    const collapsed = ref(false)

    const switchCollapsed = () => collapsed.value = !collapsed.value

    return {
      collapsed,
      switchCollapsed
    }
  }
};
</script>
<style scoped>
#components-layout-demo-custom-trigger {
  width: 100vm;
  height: 100vh;
}
</style>
