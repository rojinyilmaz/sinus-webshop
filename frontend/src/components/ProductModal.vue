<template>
<div id="wrapper">
  <div id="bImage">
    <img id="bImg">
  </div>
  <div id="bDesc">
    <h1>Product {{ id }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lectus lacus. Morbi id fringilla arcu. Mauris maximus nunc sed ligula faucibus vehicula. Sed eu diam ac enim efficitur pellentesque. Cras rhoncus pulvinar finibus. Sed placerat ligula eros, nec ultrices ipsum congue fermentum. Aenean et elit vitae arcu semper consequat sit amet vel sem. Nunc eu commodo neque, vel sagittis erat. Sed tristique venenatis purus et consequat. Proin tempor ante ex, quis condimentum risus convallis sit amet. Nulla facilisi. Curabitur in suscipit eros. Suspendisse eu porttitor elit, sit amet luctus velit.
    </p>
  </div>
  
</div>
</template>

<script>
export default {
  props: ['id'],

}
</script>

<style scoped>
#wrapper{
  color: black;
  display: flex;
  height: 40em;
  margin: 4em;
}
#bImage{
  width: 60%;
}
#bImg{
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  background-color: grey;
}
#bDesc{
  width:40%;
  background-color:white;
}
</style>