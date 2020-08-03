<template>
  <div id="InputPanel">
    <div class="title">
      <h2>Add New Data</h2>
    </div>
    <hr />
    <v-form class="form">
      <v-text-field
        v-model="quantity"
        placeholder="Quantity"
        type="number"
        dark
        solo
        class="inputField"
      ></v-text-field>
      <v-date-picker v-model="picker" dark></v-date-picker>
      <hr />
      <v-btn outlined dark block class="button" type="submit">Confirm</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "InputForm",

  components: {},

  data: () => ({
    //
    quantity: null,
    date: new Date().toISOString().substr(0, 10),
    picker: new Date().toISOString().substr(0, 10),
  }),
};
</script>

<style lang="scss">
#InputPanel {
  background-color: #222222;
  color: rgb(236, 236, 236);
  display: inline-block;
  border-radius: 5px;

  padding: 15px;
  margin: 10px;
  //box-shadow: 0px 0px 20px 5px rgb(66, 66, 66);
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
  //box-shadow: 0px 0px 20px 5px rgb(40, 40, 40);
}

.inputField input[type="number"] {
  -moz-appearance: textfield;
}
.inputField input::-webkit-outer-spin-button,
.inputField input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
