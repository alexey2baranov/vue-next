<template>
  <div :style="{height: height + 'px' }" style="border: solid gray 2px;">
    <h1>User {{ name }}</h1>
    <input v-model="name"/>
    <span>{{ heightPx }}</span>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import {defineComponent, ref, toRefs, toRef, computed, onMounted} from 'vue';
import {Store, useStore} from "vuex";
import {State} from "@/store";


export default defineComponent({
  name: 'HelloWorld',
  props: {
    message: String,
    height: Number,
  },
  setup(props, context) {
    const store= useStore()
    // store.state.
    const a = ref(1234)
    // const {height}= toRefs(props)
    const height = toRef(props, 'height')
    console.log(props, height, a)
    const name = ref('Alexey')


    const root = ref(null)

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(root.value) // <div>This is a root element</div>
      // store.state.
    })

    const heightPx = computed(() => {
      console.log(height);
      return height.value + 'px'
    })

    return {
      name,
      heightPx,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="SCSS" scoped>

h1 {
  color: blue;
}
</style>
