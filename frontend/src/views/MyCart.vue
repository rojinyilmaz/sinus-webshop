<template>
<div class="wrapper">
  <main class="checkout">
    <img class="logo" src="../assets/Sinuscheckout.svg"/> 
<hr class="line1"/>
      <h2 class="h2cart">My cart</h2>
      <div class="cartlist">
  <div v-for="(product, i) in getCartItems" v-bind:key="i">
    <div class="h4"><h4>{{product.title}}</h4></div>
   <div class="h5"><h5>{{product.price}} SEK</h5></div>
    <div><img :src="require(`../assets/${product.imgFile}`)"/></div>
</div>
      </div>
      <footer class="total" v-if="getCartItems.length">
                <h3>Total</h3><h3>{{ total }} SEK</h3>
                <hr class="line2"/>
            </footer>
      <button @click="$router.push('/checkout')">Checkout</button>
      <the-nav/>
  </main>
</div>
</template>

<script>
import TheNav from '../components/TheNav.vue'

export default {
components:{
  TheNav
},
computed: {
  getCartItems(){
    return this.$store.state.cart
  },
  total(){
    return this.$store.getters.total;
    }
}
}
</script>

<style scoped>
.wrapper{
    background-color: black;
    margin-left: -1%;
  margin-right: -1%;
  margin-bottom: -1%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
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

.line2{
  border: 2px solid black;
  width: 90%;
  margin-top: 1rem;
}

.h2cart{
  text-decoration: underline;
  margin-left: 3.5rem;
}

h3{
  display: flex;
  justify-content: flex-end;
  margin-inline: 6rem;
  bottom: 10rem;
  text-decoration: underline;
  font-weight: bold;
}

.cartlist{
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin-inline: 3.5rem;  
}

img{
  width: 60px;
  height: 60px;
}

button{
  width: 18%;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 14px 20px;
  border: 1px solid;
  letter-spacing: 1px;
  border-radius: 20px;
  text-transform: uppercase;
  transition: transform .1s ease-in;   
  cursor: pointer;
  right: 5.5rem;
  bottom: 5rem;
  position: absolute;
}

button:hover{
  background-color: #45a049;
}

</style>
