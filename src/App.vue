<template>
  <div id="app" :class="darkMode ? 'dark' : 'light'">
    <div class="working-area">
      <h1>Trasee Logo</h1>
      <div class="content">
        <InputForm />
        <ChartsPanel />
      </div>
    </div>
  </div>
</template>

<script>
import InputForm from "./components/InputForm";
import ChartsPanel from "./components/ChartsPanel";

export default {
  name: "App",

  components: {
    InputForm,
    ChartsPanel,
  },

  data: () => ({
    darkMode: true,
  }),
};
</script>

<style lang="scss">
.light {
  background: rgb(120, 198, 255) !important;
  background: linear-gradient(
    70deg,
    rgba(120, 198, 255, 1) 0%,
    rgba(0, 151, 255, 1) 100%
  ) !important;
}

.dark {
  background: linear-gradient(70deg, #177bec, #0e2d50) !important;
  color: white !important;
}

#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
}

.working-area {
  width: 1200px;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  align-items: center;
  flex: 1;

  padding: 40px;
}

h1 {
  margin-top: 40px;
  margin-left: 55px;
}
</style>
