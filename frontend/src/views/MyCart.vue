<template>
<div class="wrapper">
  <main class="checkout">
    <img class="logo" src="../assets/Sinuscheckout.svg"/>
    
<hr class="line1"/>
      <h3>My cart</h3>
      <div class="cartlist">
  <div v-for="(product, i) in getCartItems" v-bind:key="i">
    <div class="h4"><h4>{{product.title}}</h4></div>
   <div class="h5"><h5>{{product.price}} SEK</h5></div>
    <div><img :src="require(`../assets/${product.imgFile}`)"/></div>
</div>
      </div>
      <footer class="total" v-if="getCartItems.length">
                <h2>Total {{ total }} kr</h2>
            </footer>
      <button @click="$router.push('/checkout')">Checkout</button>
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

h2{
  display: flex;
  justify-content: flex-end;
  margin-inline: 6rem;
    text-decoration: underline;
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
  width: 15%;
  background-color: #36B52B;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  right: 5.5rem;
    bottom: 5rem;
    position: absolute;
}

</style>