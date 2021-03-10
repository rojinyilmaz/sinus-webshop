<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/productpage">Products</router-link> |
      <router-link to="/myaccount"><img src="./assets/user.svg"/></router-link>
            <router-link to="/cart"><img src="./assets/cartwhite.svg"/></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  Components:{
    
  }
}
</script>

<style lang="scss">

body{
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
