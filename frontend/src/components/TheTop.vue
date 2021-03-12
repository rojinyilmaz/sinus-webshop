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
        

        <div class="gtblock">
          
         <p class="gttext">&#9826; GOOD TIME <img class ="withimg" src="../assets/img/Withpic.png"> <br>  GREAT FRIENDS   </p> 
        
        </div>
 
         <div class="miniText">
 
        <hr>
        Northern<br>
        Europe's largest<br> 
        skateboard shop
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
 
@import url('https://fonts.googleapis.com/css2?family=Esteban&display=swap');
 
.gtblock{
  width: 560px;
}
 
.gttext{

  font-size: 60px;
  color: white;
  margin-right: 50px;
  margin-top: 100px;
  line-height: 60px;
  text-align: left;
  font-family: 'Esteban', serif;
}
 
.withimg{
  width: 100px;
  margin-top: 5px;
  height:60px; 
}





 
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
 
hr{
  width: 35%;
}
</style>