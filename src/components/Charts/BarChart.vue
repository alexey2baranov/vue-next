<template>
  <div ref="barchart"
       class="barChart"
  />
</template>
<script lang="ts">
import {
  toRefs,
  ref,
  onMounted,
  defineComponent,
} from 'vue';
import echarts, {EChartOption} from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/axis';
import SeriesBar = echarts.EChartOption.SeriesBar;

export default defineComponent({
  name: 'BarChart',
  props: {
    values: {
      required: true,
      type: Array
    },
    title: {
      required: true,
      type: String
    }
  },
  setup(props) {
    let {title, values} = toRefs(props);
    let barchart = ref();

    let members: string[] = values.value.map((data: any) => data.member);
    let hours: string[] = values.value.map((data: any) => data.hours);

    onMounted(() => {
        let options: EChartOption<SeriesBar> = {
          title: {
            text: title.value,
          },
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: members,
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: title.value,
              type: 'bar',
              barWidth: '60%',
              data: hours,
            }
          ]
        };
        echarts.init(barchart.value).setOption(options, false, false);
    });

    return {
      barchart,
    }
  }
})
</script>
<style scoped>
.barChart{
  display: flex;
  padding: 3px;
  width: 350px;
  height: 350px;
}
</style>
