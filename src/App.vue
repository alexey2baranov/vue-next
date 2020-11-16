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
          height: '100%',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  ref,
  defineComponent
} from "vue";
import TheHeader from "@/components/App/TheHeader.vue";
import SideBar from "@/components/App/SideBar.vue";

import Alert from './components/App/Alert.vue'

export default defineComponent ({
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
})
</script>
<style scoped>
#components-layout-demo-custom-trigger {
  display: flex;
  width: 100%;
  height: 100vh;
  /*overflow-x: hidden;*/
}
</style>
