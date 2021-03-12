<template>
<div class="wrapper">
  <main class="thankyou">
    <img class="logo" src="../assets/Sinuscheckout.svg"/>
    
<hr class="line1"/>
<article class="thanks">
      <h1>Thank you for your order!✅</h1>
      <p>We've recevied your order and it's being processed. 
          You will recevie an email with order details</p>
          <br>
          <img class="skateboard" src="../assets/thankyou.png"/>
          <br>
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
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

.thankyou:not(.logo) {
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 96%;
    height: 84vh;
    border-radius: 3px; 
  position: relative;
}

.logo{
  width: 60px;
  height: 60px;
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
    color:midnightblue;
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


.skateboard{
    position: fixed;
    inset-inline-end: 30%;
    height: 38%;
    width: 38%;
}

button{
 width: 23%;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 16px 5px 16px 5px;
  border: 1px solid;
  letter-spacing: 1px;
  border-radius: 20px;
transition: transform .1s ease-in;   
  cursor: pointer;
  right: 38%;
    bottom: 5%;
    position: absolute;
}
button:hover{
background-color: #45a049;
}

</style>