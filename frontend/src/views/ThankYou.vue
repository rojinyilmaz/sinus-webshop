<template>
<div class="wrapper">
  <main class="thankyou">
    <img class="logo" src="../assets/Sinuscheckout.svg"/>
    
<hr class="line1"/>
<article class="thanks">
      <h1>Thank you for your order!✅</h1>
      <br>
      <p>We've recevied your order and it's being processed. 
          You will recevie an email with order details</p>
      <button @click="$router.push('/')">Back to homepage ➤</button>
</article>
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


.thankyou{
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


h1{
    text-decoration: underline;
    margin-left: 3em;
    font-weight: bold;
}

p{
    font-weight: bold;
    font-size: 1em;
}

h1, p{
    text-align: center;
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
  align-self: center;
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