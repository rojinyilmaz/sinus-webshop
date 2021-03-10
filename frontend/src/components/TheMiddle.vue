<template>
 
<div class="middleContainer">
    <div class="logotype">
      <!-- <img src="../assets/comp.png"> -->
    </div>
 
    <div class="middlepic">
      <img src="../assets/img/Skateboardssss.png">
    </div>
 
    <div class="gretaaaa">
      <img src="../assets/img/Component 5.png">
    </div>
 
    <div class="textbox">
      <h2 class="gre">Greta Fury </h2>
      <h2 class="lim">Limited Edition</h2>
      <p> Right now we have a special board that visits us, imagine that you can skateboard with a clear conscience and know that you have done 
        something good for the environment, </p>
      <p>Greta fury is the first skateboard to be recreated from old / broken boards. and is 100% without an impact on the environment. Not only 
        is it well made but it is also really good looking so you can shine & stand out from the rest in the park.</p>
    </div>
  </div>
    
</template>


 
<script>
export default {
    
}
</script>


 
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Esteban&display=swap');
 
.middleContainer {
  display: grid;
  grid-template-columns: 10%  15% 10% 7% 35%;
  grid-template-rows: 20% 40% 70% 5% 60%;
  max-width: 100%;
  margin: 0 auto;
}
.middlepic{
  grid-column: 2;
  grid-row: 2;
}
.logotype {
  grid-column: 8;
   grid-row: 2;
}
.gretaaaa {
  grid-row: 3;
  grid-column: 2;
}
.Testaren{
  grid-column: 5;
  grid-row: 3;
}
.textbox{
  
  
  background-color: black;
  color: black;
  width: 25em;
  grid-row: 3;
  grid-column: 5;
  
}
p{
  color: white;
  font-size: 18px;
  font-family:'Times New Roman', Times, serif;
}
 
.gre{
  color: white;
  
  
  margin-right: 4em;
}
 
.lim{
  color: #B77135;
}
 
</style>