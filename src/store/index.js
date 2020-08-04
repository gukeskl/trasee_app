import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      {
        date: "2020-08-04",
        quantity: 12,
        time: "00:00",
      },
      {
        date: "2020-08-02",
        quantity: 13,
        time: "00:00",
      },
      {
        date: "2020-08-03",
        quantity: 14,
        time: "00:00",
      },
    ],
  },
  mutations: {
    PASS_DATA(state, newData) {
      newData.forEach((el) => {
        state.data.push(el);
      });
    },
  },
  actions: {},
  getters: {
    getSortedData: (state) => {
      let sorted = state.data.sort((el1, el2) => {
        //first by date
        let second = el1.date.split("-");
        let first = el2.date.split("-");

        for (let i = 0; i < first.length; i++)
          if (parseInt(first[i]) < parseInt(second[i])) return -1;

        //now by time
        first = el1.time.split(":");
        second = el2.time.split(":");

        for (let i = 0; i < first.length; i++)
          if (parseInt(first[i]) < parseInt(second[i])) return -1;
      });

      sorted.forEach((el) => console.log(el.date));
      return [...state.data];
    },
  },
  modules: {},
});
