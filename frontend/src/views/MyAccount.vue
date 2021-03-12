<template>
  <div>
     
      <div v-if="loggedIn">
        <UserInformation />
      </div>
      <div v-else>
        <LoginForm />
      </div>
     
  <the-nav/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import UserInformation from '../components/UserInformation.vue'
import TheNav from '../components/TheNav.vue'
export default {
  components: { 
    UserInformation,
    LoginForm,
    TheNav
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