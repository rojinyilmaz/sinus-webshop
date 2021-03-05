<template>
   <div class="hello">
   <TheTop />
   <TheMiddle /> 
  </div> 
</template>

<script>
// @ is an alias to /src
import TheTop from '../component/TheTop.vue'
import TheMiddle from '../component/TheMiddle.vue'


export default {
  name: 'Home',
  component: {
    TheTop,
    TheMiddle,
  }

}
</script>


<style scoped>
@import url('https://fonts.google.com/specimen/Montserrat?preview.text_type=custom#standard-styles');


body {
  padding: 0;
  background-color: black;
}

</style>