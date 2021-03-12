<template>
 <div class="wrapper">
   <main class="checkout">
  <img class="logo" src="../assets/Sinuscheckout.svg"/>  
<hr class="line1"/>
<Checkoutform />
</main>
<div class="vl"></div>
 </div>
</template>
<script>

import Checkoutform from '../components/Checkoutform.vue'

export default {
    components: {
        Checkoutform,
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
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

.checkout:not(.logo) {
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

.vl{
  border-left: 5px solid black;
  height: 65%;
  position: absolute;
  left: 60%;
  margin-left: -3px;
  top: 14.5rem;
}



</style>