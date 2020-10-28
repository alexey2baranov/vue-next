<template>
  <div :style="{ height: height + 'px' }" style="border: solid gray 2px;">
    <h1>User {{ value.name }}</h1>
    <h1>Reversed {{ $store.getters.reversedUsername }}</h1>
    <input v-model="value.name" />

    <a-button @click="save_click">Save</a-button>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import {
  defineComponent,
  ref,
  toRefs,
  toRef,
  computed,
  onMounted,
  reactive,
} from "vue";
import { Store, useStore } from "vuex";
import { State, User } from "@/store";

export default defineComponent({
  name: "HelloWorld",
  props: {
    message: String,
    height: Number,
  },
  setup(props, context) {
    const store = useStore();
    store.state.height;
    const a = ref(1234);
    // const {height}= toRefs(props)
    const height = toRef(props, "height");
    console.log(props, height, a);
    const name = ref("Alexey");

    // init component from store
    const value = reactive({ ...store.state.user });

    // save new state to store
    const save_click = () => store.commit("setUser", { ...value });

    onMounted(() => {});

    const heightPx = computed(() => {
      console.log(height);
      return height.value + "px";
    });
    const computedCount = computed(() => {
      return store.state.count * 3;
    });

    return {
      name,
      heightPx,
      computedCount,
      value,
      save_click,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="SCSS" scoped>
h1 {
  color: blue;
}
</style>
