<template>
<div class="hello">
    <div class="container">

        <div class="logo">
             <img src="../assets/img/Comp.png">
        </div>
        <div class="pic">
            <img src="../assets/img/skateboardhandshake.png">
        </div>
        <div class="skate">
            <img src="../assets/img/skateboardes.png">
        </div>
        
         <div class="miniText">
        <hr>
        <strong>Northern 
          Europe's largest 
          skateboard shop</strong>
        <hr>
      </div>
 
    </div>
</div>
</template>



<script>
export default {
    
}
</script>




<style scoped>
.container {
    display: grid;
    grid-template-columns:  20% 23% 10% 10% 10% 20% 20%;
    grid-template-rows: 10% 10% 30% 20% 36% 25% 10% 10%;
    max-width: 110em;
    margin: 0 auto;
}
.hello{
  padding: 0%;
}
.logo{
  grid-column: 1;
} 
.skate {
  grid-column: 3;
  grid-row: 4;
}
.hamburger-menu {
  width: 35px;
  height: 39px;
  position: fixed;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.line {
  width: 100%;
  height: 3px;
  background-color: white;
}
.miniText {
  color: white;
  grid-row: 5;
  grid-column: 2;
  font-family: m;
}
</style>