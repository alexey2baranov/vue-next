<template>
  <div style="display:flex; height: 90px; width: 50%; position: absolute; top: 10px; left: 50%;
    transform: translate(-25%, 0)">
    <alert-item v-if="store.state.alert.isVisible"
                :message="optionsAlert.message"
                :description="optionsAlert.description"
                :type="optionsAlert.type"
                :closable=true
                @close="hide"
                close-text="Закрыть"
                class="alert-item"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
} from "vue";
import {useStore} from "vuex";
import {MutationTypes} from '@/store/helpers/typesStore';
import AlertItem from './AlertItem.vue'

export default defineComponent({
  components: {
    AlertItem
  },
  setup() {
    const store = useStore()
    const hide = () => store.commit(MutationTypes.Hide)
    const optionsAlert = computed(() => store.getters.optionsAlert)
    return {
      store,
      optionsAlert,
      hide
    }
  }
})
</script>

<style>
 .alert-item{

 }
</style>
