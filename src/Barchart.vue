<template>
  <div id="app">
    <ejs-chart
      v-for="type in ['Bar', 'Column']"
      :key="type"
      :legendSettings="legendSettings"
      :primaryXAxis="primaryXAxis"
    >
      <e-series-collection>
        <e-series
          v-for="i in 5"
          :key="i"
          :dataSource="seriesData"
          :yName="`s${i}`"
          :name="`s${i}`"
          :type="type"
          xName="date"
        />
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script>
import {
  BarSeries,
  ColumnSeries,
  DateTimeCategory,
  Legend
} from "@syncfusion/ej2-vue-charts";

export default {
  data() {
    return {
      seriesData: Array(7)
        .fill()
        .map((_, i) => ({
          date: new Date(
            2020,
            5,
            new Date().getDate(),
            new Date().getHours() - i
          ),
          s1: (i + 1) * Math.random() * 10,
          s2: (i + 1) * Math.random() * 10,
          s3: (i + 1) * Math.random() * 10,
          s4: (i + 1) * Math.random() * 10,
          s5: (i + 1) * Math.random() * 10
        }))
        .sort((a, b) => a.date - b.date),

      legendSettings: {
        visible: true,
        position: "Bottom"
      },

      primaryXAxis: {
        valueType: "DateTimeCategory",
        labelFormat: "y/MM/dd HH:mm"
      }
    };
  },

  provide: {
    chart: [BarSeries, ColumnSeries, DateTimeCategory, Legend]
  }
};
</script>
