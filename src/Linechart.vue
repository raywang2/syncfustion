<template>
  <div id="app">
    <ejs-chart
      id="container"
      :primaryXAxis="primaryXAxis"
      :primaryYAxis="primaryYAxis"
      :tooltip="tooltip"
      :legendSettings="legendSettings"
    >
      <e-series-collection>
        <e-series :dataSource="seriesData" type="Line" xName="freq" yName="v1" name="v1"></e-series>
        <e-series :dataSource="seriesData" type="Line" xName="freq" yName="v2" name="v2"></e-series>
        <e-series :dataSource="seriesData" type="Line" xName="freq" yName="v3" name="v3"></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>
import Vue from "vue";
import {
  ChartPlugin,
  LineSeries,
  Tooltip,
  Legend
} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
        {
          freq: 12.826536,
          v1: 0.697099,
          v2: 0.172224,
          v3: 0.569004
        },
        {
          freq: 29.418025,
          v1: 0.139836,
          v2: 0.007529,
          v3: 0.850914
        },
        {
          freq: 54.551056,
          v1: 0.86625,
          v2: 0.071657,
          v3: 0.609019
        }
      ],
      primaryYAxis: {
        maximum: 0.9,
        minimum: 0.001,
        title: "Runs",
        valueType: "Double",
        rangePadding: "None"
      },
      tooltip: {
        enable: true
      },
      legendSettings: {
        visible: true,
        position: "Bottom"
      },
      primaryXAxis: {
        valueType: "Double"
      }
    };
  },
  provide: {
    chart: [LineSeries, Tooltip, Legend]
  }
};
</script>
