<template>
  <div id="chartsTemplate">
    <div class="back-btn">
      <div class="status">
        Last Status: {{ lastStatus.date }} / {{ lastStatus.quantity }} persons
      </div>
      <v-btn class="btn-color" @click="goToForm">FORM</v-btn>
    </div>
    <div class="chart-panel panel">
        <v-btn-toggle class="btn-toggle" v-model="toggle" mandatory dark>
          <v-btn> Day </v-btn>
          <v-btn> Week </v-btn>
          <v-btn> Month </v-btn>
        </v-btn-toggle>
      <chart class="chart"/>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Chart";
import { mapGetters } from "vuex";

export default {
  name: "ChartPanel",
  components: {
    Chart,
  },
  data: () => ({
    toggle: ""
  }),
  computed: {
    ...mapGetters(["getSortedData"]),
    lastStatus: function() {
      return this.getSortedData[this.getSortedData.length - 1];
    },
    getToggle: function() {
      return toggle
    }
  },
  methods: {
    goToForm() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
#chartsTemplate {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.back-btn {
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.status {
  margin-right: 20px;
  font-size: 25px;
  color: #ffffffd5;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.btn-color {
  background-color: rgb(185, 185, 185) !important;
}
.btn-toggle{
  margin-left: 50px !important;
  margin-top: 10px !important;
  border-radius: 5px  !important;
}
.chart-panel {
  height: 100%;
  width: 100%;
}
.chart {
  width: 100%;
  height: 90%;
}
</style>
