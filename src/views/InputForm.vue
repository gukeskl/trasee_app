<template>
  <div id="InputPanel">
    <div class="panel">
      <div class="title">
        <h2>Pass New Data</h2>
      </div>
      <hr />
      <v-form class="form">
        <v-text-field
          v-model="formData.quantity"
          placeholder="Quantity"
          type="number"
          dark
          solo
          class="inputField"
        ></v-text-field>
        <div class="pickers-container">
          <v-date-picker
            v-model="formData.date"
            class="picker datePicker"
            dark
          ></v-date-picker>
          <v-time-picker
            v-model="formData.time"
            :format="'24hr'"
            :full-width="true"
            :scrollable="true"
            :allowed-minutes="[0, 30]"
            class="picker"
            dark
          ></v-time-picker>
        </div>

        <hr />
        <v-btn outlined dark block @click="confirm">Confirm</v-btn>
      </v-form>
    </div>
    <div class="data-panel">
      <v-data-table
        :headers="headers"
        :items="tableData"
        :items-per-page="8"
        class="elevation-1 panel data-panel"
        dark
      ></v-data-table>
      <div class="buttons">
        <v-btn class="button" outlined @click="save">SAVE</v-btn>
        <v-btn class="button" outlined @click="goToVizualization"
          >Visualization</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputForm",

  components: {},

  data: () => ({
    formData: {
      date: new Date().toISOString().substr(0, 10),
      quantity: null,
      time: "00:00",
    },
    tableData: [],

    headers: [
      {
        text: "",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Date", value: "date" },
      { text: "Time", value: "time" },
      { text: "Quantity", value: "quantity" },
    ],
  }),

  methods: {
    confirm() {
      if (this.formData.quantity) {
        this.formData.quantity = parseInt(this.formData.quantity);
        this.tableData.push({ ...this.formData });
        this.formData.quantity = null;
      }
    },
    save() {
      if (this.tableData.length) {
        this.$store.commit("PASS_DATA", [...this.tableData]);
        this.tableData = [];
      }
    },
    goToVizualization() { 
      this.$router.push("/chart"); 
      },
  },
};
</script>

<style lang="scss" scoped>
#InputPanel {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
  border: rgb(87, 87, 87) solid 1px;
}

.title {
  margin: 10px;
  margin-bottom: 20px;
}

.datePicker {
  margin-right: 10px;
}

.pickers-container {
  display: flex;
  flex-direction: row;
}

.picker {
  min-width: 290px;
  //height: 392p;
}

.data-panel {
  box-shadow: none !important;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  //background-color: #1e1e1e80 !important;
}

.elevation-1 {
  background-color: #1e1e1e80 !important;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.button {
  width: 100%;
  color: #82b1ff !important;
}
.buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15%;
}
</style>
