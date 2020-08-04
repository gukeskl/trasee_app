<script>
import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  name: "Chart",
  extends: Bar,
  props: ["toggle"],

  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
            },
          },
        ],
      },
    },
    dataset: {
      labels: [],
      datasets: [
        {
          label: "Blue",
          data: [],
          borderColor: "rgba(0, 127, 247,1)",
          borderWidth: 1,
        },
      ],
    },
  }),

  computed: {
    ...mapGetters(["getSortedData"]),
  },

  mounted() {
    //DAYS
    if (this.toggle === 0) {
      this.getSortedData.forEach((el) => {
        this.dataset.labels.push(el.date);
        this.dataset.datasets[0].data.push(el.quantity);
      });
    }
    //WEEKS
    if (this.toggle === 1) {
    }
    //MONTHS
    if (this.toggle === 2) {
      this.getSortedData.forEach((el) => {
        this.dataset.labels.push(el.date);
        this.dataset.datasets[0].data.push(el.quantity);
      });
    }

    this.renderChart(this.dataset, this.options);
  },
};
</script>

<style lang="scss" scoped>
.color-test {
  background-color: rgba(0, 247, 111, 1);
}
</style>
