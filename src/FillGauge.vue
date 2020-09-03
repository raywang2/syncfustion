<template>
  <div>
    <div class="content-wrapper">
      <div align="center">
        <ejs-lineargauge>
          <e-axes>
            <e-axis :ranges="ranges">
              <e-pointers>
                <e-pointer value="80" type="Bar"></e-pointer>
              </e-pointers>
            </e-axis>
          </e-axes>
        </ejs-lineargauge>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";

Vue.use(LinearGaugePlugin);
export default {
  data() {
    return {
      ranges: [
        {
          color: 'red',
          start: 50,
          end: 80
        },
        {
          color: 'yellow',
          start: 20,
          end: 50
        }
      ]
    };
  }
};
</script>
