<template>
  <div ref="piechart"
       class="pieChart"
  />
</template>
<script lang="ts">
import echarts, { EChartOption } from 'echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import {defineComponent, onMounted, ref, toRefs} from 'vue';
import SeriesPie = echarts.EChartOption.SeriesPie;

export default defineComponent({
  name: 'PieChart',
  props: {
    data: {
      required: true,
      type: Object
    },
    title: {
      required: true,
      type: String
    },
    hours: {
      required: true,
      type: Number
    }
  },
  setup(props) {
    let {title, data, hours} = toRefs(props);
    let piechart = ref();


    let legendData: string[] = data.value.legendData;
    let seriesData: object[] = data.value.seriesData;
    let selected: object = data.value.selected;

    onMounted(() => {
      let options: EChartOption<SeriesPie> = {
        title: {
          text: title.value,
          subtext: `Всего ${hours.value} часов`
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: "scroll",
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: legendData,
          selected: selected
        },
        series: [
          {
            name: title.value,
            type: 'pie',
            radius: '50%',
            center: ['40%', '50%'],
            data: seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        animationDuration: 1000
      };
      echarts.init(piechart.value).setOption(options, false, false);
    });

    return {
      piechart
    };
  }
});
</script>
<style scoped>
.pieChart {
  display: flex;
  padding: 3px;
  width: 350px;
  height: 350px;
}
</style>
