<template>
  <div id="app">
    <div>
      
         
           <router-link to="/myaccount"><img src="./assets/user.svg"/></router-link>
      <Cart/>
       <TheNav/>
      <router-view/>
    </div>
    
  </div>
</template>
<script>
import Cart from './components/Cart.vue'
import TheNav from './components/TheNav.vue'
export default {
  name: 'App',
  components: {Cart, TheNav},
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

  

</style>
