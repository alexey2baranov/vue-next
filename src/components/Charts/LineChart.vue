<template>
   <span ref="lineChart" />
</template>

<script lang="ts">
import echarts, { EChartOption } from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/axis';
import {defineComponent, onMounted, ref, toRefs} from 'vue';
import SeriesLine = echarts.EChartOption.SeriesLine;

export default defineComponent({
  name: 'LineChart',
  props: {
    // data: {
    //   required: true,
    //   type: Object
    // },
    // title: {
    //   required: true,
    //   type: String
    // },
    // legend: {
    //   required: true,
    //   type: Array
    // },
    // hours: {
    //   required: true,
    //   type: Number
    // }
  },
  setup(props) {
    // let {title, data, hours} = toRefs(props);
    let lineChart = ref();
    onMounted(() => {
      let options: EChartOption<SeriesLine> = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      echarts.init(lineChart.value).setOption(options, false, false);
    });

    return {
      lineChart
    };
  }
});
</script>

<style scoped>

</style>
