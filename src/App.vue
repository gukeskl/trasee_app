<template>
  <div id="app" :class="darkMode ? 'dark' : 'light'">
    <div class="working-area">
      <div class="header">Trasee</div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

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
  //flex-direction: column;
  flex: 1;
  z-index: 1;

  padding: 40px;
}

.header {
  //margin-top: 40px;
  //margin-left: 55px;
  font-size: 200px;
  z-index: 0;

  position: absolute;
  color: #ffffff48;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.panel {
  border-radius: 5px;
  color: rgb(236, 236, 236);
  background-color: #222222;
  padding: 15px;
  margin: 10px;
  box-shadow: 3px -3px 8px 1px rgba(15, 15, 15, 0.377);
}

.v-text-field {
    margin-left: 10px ;
}
.v-data-footer{
  justify-content: space-between !important;
}

.theme--dark .v-picker__body {
    background: #42424200 !important;
}
.theme--dark.v-time-picker-clock {
    background: #61616129 !important;
}
.v-time-picker-title {
    justify-content: flex-start !important;
}
.v-time-picker-clock__hand {
    background-color: rgba(255, 255, 255, 0.479) !important;
}

.inputField input[type="number"] {
  -moz-appearance: textfield;
}
.inputField input::-webkit-outer-spin-button,
.inputField input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
