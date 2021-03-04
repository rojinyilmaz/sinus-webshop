<template>
  <div>
     
      <div v-if="loggedIn">
        <UserInformation />
      </div>
      <div v-else>
        <LoginForm />
        <RegisterHome />
      </div>
     

  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import RegisterHome from '../components/registerHome.vue';
import UserInformation from '../components/UserInformation.vue'
export default {
  components: { 
    UserInformation,
    RegisterHome,
    LoginForm,
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