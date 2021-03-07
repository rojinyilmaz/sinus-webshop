<template>
 <div class="wrapper">
   <main class="checkout">
  <img class="logo" src="../assets/Sinuscheckout.svg"/>  
<hr class="line1"/>
<Checkoutform />
</main>
 </div>
</template>
<script>

import Checkoutform from '../components/Checkoutform.vue'

export default {
    components: {
        Checkoutform
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

.payment{
    display: grid;
   grid-template-columns: 1fr;
}

</style>