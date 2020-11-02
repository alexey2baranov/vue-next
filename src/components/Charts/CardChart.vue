<template>
  <div style="display:flex; justify-content: space-around">
    <a-card :loading="loading" style="width: 500px; height: 500px" title="Card title">
      <BarCart :title="'test'" :values="[
          {
            member: 'Ivanov A. S.',
            hours: 32
          },
          {
            member: 'Petrov E. K.',
            hours: 24
          },
          {
            member: 'Sidorov I. I.',
            hours: 40
          }
        ]"/>
    </a-card>
    <a-card :loading="loading" style="width: 500px; height: 500px" title="Card title">
      <pie-chart :title="'test'"
                 :hours="40"
                 :data="{
                legendData: ['Ivan', 'Alex', 'Ben'],
                seriesData: [
                    {name: 'Ivan', value: '27'},
                    {name: 'Alex', value: '36'},
                    {name: 'Ben', value: '32'},
                    ],
                selected: {'Ivan': 1, 'Alex': 2,'Ben': 3}
              }"
      />
    </a-card>
  </div>
  <a-button style="marginTop: 16px" @click="handleClick">
    Toggle loading
  </a-button>
</template>

<script lang="ts">
import BarCart from '@/components/Charts/BarChart.vue';
import PieChart from '@/components/Charts/PieChart.vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'CardChart',
  components: {
    BarCart,
    PieChart
  },
  setup() {
    let loading = ref(true);
    const handleClick = () => loading.value = !loading.value;

    return {
      loading,
      handleClick
    };
  }
});
</script>

<style>

</style>
