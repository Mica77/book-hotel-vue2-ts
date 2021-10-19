<template>
  <div id="app">
    <h1>Онлайн бронирование отелей</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
@media screen and (min-width: 960px) {
  html {
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
}

body {
  color: #2c3e50;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    text-align: center;
  }
}
</style>
