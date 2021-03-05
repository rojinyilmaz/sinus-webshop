<template>
<div class="wrapper">
  <main class="checkout">
    <img class="logo" src="../assets/Sinuscheckout.svg"/>
    
<hr class="line1"/>
      <h3>My cart</h3>
      <ul>
  <li v-for="(product, i) in getCartItems" v-bind:key="i">
    <h4>{{product.title}}</h4>
    <h5>{{product.price}} SEK</h5>
    <div><img :src="require(`../assets/${product.imgFile}`)"/></div>
  </li>
</ul>
  </main>
</div>
</template>

<script>


export default {
components:{

},
computed: {
  getCartItems(){
    return this.$store.state.cart
  }
}
}
</script>

<style scoped>
.wrapper{
    background-color: black;
     height: 89vh;
    margin-left: -1%;
  margin-right: -1%;
  margin-bottom: -1%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}


.checkout{
    background-color: #ffff;
    display: flex;
        flex-direction: column;
        text-align: left;
        width: 96%;
        height: 84vh;
        border-radius: 3px;
}

.logo{
  
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
}

.line1{
    border: 2px solid black;
    width: 90%;
    margin-top: 1rem;
}


h3{
    text-decoration: underline;
    margin-left: 3em;
}

h4, h4 {
  margin-right: 50%;
}

img{
  width: 50px;
  height: 50px;
}
ul {
  list-style-type: none;
 }

</style>