<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <side-bar :collapsed="collapsed"/>
    <a-layout>
      <the-header @switch-collapsed="switchCollapsed">
      </the-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  ref,
  defineComponent
} from "vue";
import TheHeader from "@/components/App/TheHeader.vue"
import SideBar from "@/components/App/SideBar.vue"

export default defineComponent({
  components: {
    TheHeader,
    SideBar,
  },
  setup() {
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
