<template>
  <div class="home">
    <a-button @click="test" class="btn" type="danger">check Error</a-button>
    <a-button @click="testTest" type="danger">check logger and actions</a-button>
    <card-chart/>
  </div>
</template>

<script lang="ts">
import CardChart from '@/components/Charts/CardChart.vue';
import {useStore} from '@/store';
import {ActionTypes} from '@/store/modules/alert/actions';
import {defineComponent} from 'vue';
import api from '@/api';

export default defineComponent({
  name: 'Home',
  components: {
    CardChart
  },
  setup() {
    let state = useStore();

    const test = () => {
      throw new Error('error asd asd');
    };
    const testTest = async () => {
      await state.dispatch(ActionTypes.fetchData);
    };

    return {
      test,
      testTest
    };
  }
});
</script>
