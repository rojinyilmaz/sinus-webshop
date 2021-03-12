<template>
  <div>
      <form class="log-in" @submit.prevent="onSubmit" >

          <h1>LOG IN</h1>
          
            <p v-if="loginError.error" class="error">please make sure your e-mail address and password</p>
            <div v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error.index">
                        {{ error }}
                    </li>
                </ul>
            </div>
          

          <input type="text" v-model="email" placeholder="Email" class="em">
          <input type="text" v-model="password" placeholder="Password" class="pass">
          
          <div class="button">
              <input type="submit" value="LOGIN">
          </div>
          <section class="register"></section>
          <h1>Hello, friend!</h1>
          <router-link to="/register"><p class="register">Don't have a account yet?</p></router-link>
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
        toRegister() {
            this.$router.push('/register')
        },
        validation(){
            const emailValidation = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
            this.errors.splice(0,1);
            if(this.email === ''){
                this.errors.push('Enter your e-mail address');
                return;
            } else if(!emailValidation.test(this.email)){
                this.errors.push('Make sure your e-mail address is correct');
                return;
            } else if(this.password === '') {
                this.errors.push('Enter your password');
                return;
            } else if(this.password.length < 8){
                this.errors.push('Password length should be 8 to 15');
                return;
            } else {
                return true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.log-in {
    background: white;
    width: 90%;
    padding: 70px 60px;
    border-radius: 20px;
    border-bottom-right-radius: 0;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

input{
    outline: none;
    background-color: rgb(255, 255, 255);
    height: 40px;
    width: 380px;
    margin-right: 10px;
    margin-left: 3px;
    margin-bottom: 20px;
    overflow: hidden;
}

.button input {
    width: 12rem;
    height: 3rem;
    border-radius: 2rem;
    outline: none;
    border: 1px solid #36B52B;
    background-color: #36B52B;
    color: black;
    font-size: 1rem;

    &:active {
      transform: scale(.9);
    }

    &:focus{
      outline: none;
    }

    &:hover{
    background-color: black;
    color: white;
    border: none;
    }
}

p{
    color: black;
    font-family: serif;
    font-size: 18px;
    margin-top: 0px;
}

.register:hover{
    color: blue;
}

h1{
    font-size: 35px;
    text-transform: uppercase;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

.em{
    font-size: 17px;
    text-align: center;
}

.pass{
    font-size: 17px;
    text-align: center;
}

ul {
    list-style: none;
    padding-left: 0px;
}
li{
    color: rgb(228, 15, 15);
}

.error {
    color: rgb(228, 15, 15);
}

</style>