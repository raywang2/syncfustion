import Vue from "vue";
import VueRouter from "vue-router";
import { ChartPlugin, StockChartPlugin } from "@syncfusion/ej2-vue-charts";
import { HeatMapPlugin } from "@syncfusion/ej2-vue-heatmap";

import App from "./App.vue";
import FillGauge from "./FillGauge";
import Horizontal from "./HorizontalFillGauge";
import MoonGauge from "./MoonGauge";
import Heatmap from "./Heatmap";
import LineChart from "./Linechart";
import BarChart from "./Barchart";
import ComplexLineChart from "./ComplexLineChart";
import StatusProgress from "./StatusProgress";

Vue.use(ChartPlugin);
Vue.use(HeatMapPlugin);
Vue.use(StockChartPlugin);
Vue.use(VueRouter);

const routes = [
  { path: "/horizontal", component: Horizontal },
  { path: "/fillGauge", component: FillGauge },
  { path: "/lineChart", component: LineChart },
  { path: "/barChart", component: BarChart },
  { path: "/moonGauge", component: MoonGauge },
  { path: "/heatmap", component: Heatmap },
  { path: "/complexLineChart", component: ComplexLineChart },
  { path: "/statusProgress", component: StatusProgress }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App)
});
