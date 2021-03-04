<template>
  <div>
      <p v-if="loginError.error">please make sure your e-mail address and password</p>
      <h1>Log in</h1>
      <div v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error.index">
                {{ error }}
            </li>
          </ul>
      </div>
      <form class="log-in" @submit.prevent="onSubmit">
          <p>Email</p>
          <input type="text" v-model="email">
          <p>Password</p>
          <input type="text" v-model="password">
          <div  class="button">
              <input type="submit" value="Log in">
          </div>
          
      </form>
  </div>
</template>

<script>

export default {
    data(){
        return {
            email: '',
            password: '',
            errors: [],
        }
    },
    computed: {
        loginError() {
            return { error: this.$store.state.error}
        }
    },
    methods: {
        onSubmit() {
            if(this.validation()){
                const logInUser ={
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('authenticateUser', logInUser)
            }
        },

        validation(){
            const emailValidation = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
            this.errors.splice(0,1);
            if(this.email === ''){
                this.errors.push('Enter your e-mail address')
                return;
            } else if(!emailValidation.test(this.email)){
                this.errors.push('Enter your e-mail address')
                return;
            } else if(this.password === '') {
                this.errors.push('Enter your password')
                return;
            } else if(this.password.length < 8){
                this.errors.push('Password length should be 8 to 15')
                return;
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped>

.log-in {
    background-color: white;
    width: 95%;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input{
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #2F2926;
    margin-right: 20px;
    margin-left: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

.button {
    margin-top: 50px;
    margin-bottom: 50px;
}

.button input {
    display: block;
    width: 12rem;
    height: 3rem;
    border-radius: 2rem;
    outline: none;
    border: 1px solid #36B52B;
    background-color: #36B52B;
    color: black;
    font-size: 1rem;
}

.button input:hover {
    background-color: black;
    color: white;
    border: none;
}





</style>