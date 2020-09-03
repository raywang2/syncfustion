<template>
  <ejs-chart
    :primaryXAxis="primaryXAxis"
    :primaryYAxis="primaryYAxis"
    :tooltip="tooltip"
    :width="width"
  >
    <e-series-collection>
      <e-series
        :dataSource="seriesData"
        fill="Green"
        name="Running"
        stacking-group="signalId"
        type="StackingBar"
        xName="x"
        yName="y"
      />

      <e-series
        :dataSource="seriesData"
        fill="red"
        name="Stop"
        stacking-group="signalId"
        type="StackingBar"
        xName="x"
        yName="y1"
      />

      <e-series
        :dataSource="seriesData"
        fill="grey"
        name="Idle"
        stacking-group="signalId"
        type="StackingBar"
        xName="x"
        yName="y2"
      />

      <e-series
        :dataSource="seriesData"
        fill="blue"
        name="Reboot"
        stacking-group="signalId"
        type="StackingBar"
        xName="x"
        yName="y3"
      />
    </e-series-collection>
  </ejs-chart>
</template>

<script>
import {
  Category,
  DateTime,
  Legend,
  StackingBarSeries,
  Tooltip
} from "@syncfusion/ej2-vue-charts";

export default {
  data() {
    return {
      seriesData: [
        {
          x: 2007,
          y: new Date("2020-09-02 1:30"),
          y1: new Date("2020-09-02 2:30"),
          y2: new Date("2020-09-02 3:30"),
          y3: new Date("2020-09-02 6:30")
        }
      ],

      primaryXAxis: {
        visible: false
      },

      primaryYAxis: {
        intervalType: "Hours",
        labelFormat: "MM/dd HH:mm",
        maximum: new Date("2020-09-03 23:59"),
        minimum: new Date("2020-09-01 00:00"),
        rangePadding: "None",
        valueType: "DateTime"
      },

      tooltip: {
        enable: true
      },

      width: "100%"
    };
  },
  provide: {
    chart: [StackingBarSeries, Legend, Category, Tooltip, DateTime]
  }
};
</script>
