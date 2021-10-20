<template>
  <div id="app">
    <h1>Онлайн бронирование отелей</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  h1 {
    text-align: center;
  }
}

/** common */

.center-container {
  max-width: 50rem;
  margin: auto;
}

@media screen and (min-width: 960px) {
  html {
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
}

body {
  color: #2c3e50;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn {
  padding: 0.4rem 2rem;
  display: block;
  background-color: #333;
  color: white;
  font-size: 15px;

  :hover {
    color: white;
    font-size: 18px;
    background-color: #555;
    font-size: 15px;
  }
}
</style>
