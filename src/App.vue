<template>
  <div>
    <ul>
      <li>
        <router-link to="/moonGauge">Moon Gauge</router-link>
      </li>
      <li>
        <router-link to="/fillGauge">Fill Gauge</router-link>
      </li>
      <li>
        <router-link to="/Horizontal">Horizontal Gauge</router-link>
      </li>
      <li>
        <router-link to="/barChart">Bar Chart</router-link>
      </li>
      <li>
        <router-link to="/lineChart">Line Chart</router-link>
      </li>
      <li>
        <router-link to="/heatmap">Heatmap</router-link>
      </li>
      <li>
        <router-link to="/complexLineChart">Complex Line Chart</router-link>
      </li>
      <li>
        <router-link to="/statusProgress">Status Progress</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>
