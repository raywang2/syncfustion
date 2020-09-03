<template>
  <div>
    <div class="col-md-8 control-section">
      <div class="content-wrapper">
        <ejs-circulargauge
          id="customizationgauge1"
          ref="customizationgauge1"
          style="display:block"
          :centerY="centerY"
        >
          <e-axes>
            <e-axis
              :ranges="ranges"
              :radius="radius"
              startAngle="270"
              endAngle="90"
              :annotations="annotations"
              :lineStyle="lineStyle"
              :labelStyle="labelStyle"
              minimum="1000"
              maximum="2000"
              :pointers="pointers"
            ></e-axis>
          </e-axes>
        </ejs-circulargauge>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  CircularGaugePlugin,
  Annotations,
  CircularGauge
} from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);

export default Vue.extend({
  data: function() {
    return {
      centerY: "70%",
      annotations: [
        {
          content: "1800",
          angle: 0,
          zIndex: "1",
          radius: "50%"
        }
      ],
      lineStyle: { width: 0 },
      radius: "80%",
      labelStyle: {
        font: { size: "12px" },
        position: "Outside"
      },
      ranges: [
        {
          start: 1000,
          end: 2000,
          radius: "90%",
          startWidth: 30,
          endWidth: 30,
          color: "#ddd"
        },
        {
          start: 1500,
          end: 2000,
          radius: "95%",
          startWidth: 5,
          endWidth: 5,
          color: "yellow"
        },
        {
          start: 1700,
          end: 2000,
          radius: "95%",
          startWidth: 5,
          endWidth: 5,
          color: "red"
        }
      ],
      pointers: [
        {
          type: "RangeBar",
          value: 1800,
          radius: "90%",
          color: "#FFDD00",
          animation: { duration: 0 },
          pointerWidth: 30
        }
      ]
    };
  },
  provide: {
    circulargauge: [Annotations]
  }
});
</script>
