<template>
  <a-layout-header style="background: #fff; padding: 0">
<!--    <MenuUnfoldOutlined v-if="isCollapsed"
                        class="trigger"
                        @click="collapsed"
    />
    <MenuFoldOutlined v-else
                      class="trigger"
                      @click="collapsed"
    />-->
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Загрузка реестра взысканий"
        @back="collapsed"
    />
  </a-layout-header>
</template>

<script lang="ts">
import {
  ref
} from "vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup(props: any, {emit}: any) {
    let isCollapsed = ref(false)
    let collapsed = () => {
      emit('switch-collapsed');
      isCollapsed.value = !isCollapsed.value
    }

    return {
      collapsed,
      isCollapsed
    }
  }
};
</script>
<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
