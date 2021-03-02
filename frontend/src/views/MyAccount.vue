<template>
  <div>
      <!-- <div v-if="!loggedIn"><LogIn /></div> -->
      <!-- <div v-else>  -->
        <!-- <UserInformation /> -->
        <!-- </div> -->

      <div v-if="loggedIn">
        <UserInformation />
      </div>
     

  </div>
</template>

<script>
// import LogIn from '../components/LogIn.vue'
import UserInformation from '../components/UserInformation.vue'
export default {
  components: { 
    UserInformation,
    // LogIn
     },
  computed: {
      loggedIn() {
          return this.$store.state.loggedIn;
      }
  }
}
</script>

<style scoped>

</style>