<template>
  <div>
    <div class="content-wrapper">
      <div align="center">
        <ejs-lineargauge v-for="i in 10" :key="i" orientation="Horizontal">
          <e-axes>
            <e-axis
              maximum="100"
              minimum="-100"
              :ranges="[
                {
                  color: 'red',
                  start: 50 + i * Math.random(),
                  end: 80 + i * Math.random()
                },
                {
                  color: 'yellow',
                  start: 20 + i * Math.random(),
                  end: 50 + i * Math.random()
                }
              ]"
            >
              <e-pointers>
                <e-pointer :value="i * Math.random()* 10" type="Bar" color="green"></e-pointer>
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
</script>
