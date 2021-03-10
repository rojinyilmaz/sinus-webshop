<template>
  <router-link class="cart" to="/cart"><img src="../assets/cartwhite.svg"/>
 <div class="badge">{{cart.length}}</div>
 </router-link>
</template>

<script>
export default {
name: "Cart",
computed: {
  cart(){
    return this.$store.state.cart
  }
},
watch: {
  cart(){
    console.log("hej");
  }
}
}


</script>

<style>
.cart{
    right: 0;
    display: inline-block;
    position: relative;
}


.badge{
position: absolute;
width: 18px;
height: 18px;
background-color: blue;
border-radius: 0.5rem;
top: -10px;
right: 0;
color: white;
}

</style>