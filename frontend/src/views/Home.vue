<template>
   <div class="hello">
   <TheTop />
   <TheMiddle/> 
   <the-footer/>
  
  </div> 
</template>

<script>
// @ is an alias to /src
import TheTop from '../components/TheTop.vue'
import TheMiddle from '../components/TheMiddle.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    TheTop,
    TheMiddle,
    TheFooter,
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