<template>
<div class="wrapper">
  <main class="checkout">
<hr class="line1"/>
      <h3>My cart</h3>
  </main>
</div>
</template>

<script>
export default {

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
    background-position: right, left;
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

.line1{
    border: 2px solid black;
    width: 90%;
    margin-top: 5rem;
}


h3{
    text-decoration: underline;
    margin-left: 3em;
}
</style>