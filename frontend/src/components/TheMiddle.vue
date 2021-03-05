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

.middleContainer {
  display: grid;
  grid-template-columns: 10%  8% 20% 7% 35%;
  grid-template-rows: 10% 30% 70% 5% 60%;
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
  width: 32rem;
  height: 6.5rem;
  padding: 3.1rem;
  color: black;
}
p{
  color: white;
  font-weight: bold;
}


</style>