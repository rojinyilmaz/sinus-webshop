<template>
  <div class="wrapper">
      <main class="register-main">
          <h1>Register</h1>
         <p class="error" v-if="errors.length">
             <b>Correct the following error:</b>
                 <ul>
                     <li v-for="error in errors" :key="error.index">
                     {{ error }}
                     </li>
                 </ul>
            </p>    
     <form @submit.prevent="onSubmit">
        <div class="input-form">
            <label class="label-for-email" for="email">
                E-mail
            </label>
            <input class="email" type="text" v-model="user.email">
            <label class="label-for-password" for="password">
                Password
            </label>
            <input class="password" type="text" v-model="user.password" maxlength="15">
            <label class="label-for-name" for="name">
                Name
            </label>
            <input class="name" type="text" v-model="user.name">
            <label class="label-for-street" for="street">
                Street
            </label>
            <input class="street" type="text" v-model="user.address.street">
            <label class="label-for-zip" for="zip">
                Zip
            </label>
            <input class="zip" type="text" v-model="user.address.zip" maxlength="5">
            <label class="label-for-city" for="city">
                City
            </label>
            <input class="city" type="text" v-model="user.address.city"> 
        </div>
        <div class="button">
            <input type="submit" value="SIGN UP">
        </div>
    </form>
      </main>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
                name: '',
                address:{
                    street: '',
                    zip: '',
                    city: ''
                }
            },
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if(this.validation()){
                this.$store.dispatch('registerUser', this.user);
                this.$router.push('/myaccount');
            }
        },
        
        validation() {
            const emailValidation = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
            const zipValidation = /^\d{3}\d{2}$/;
            this.errors.splice(0,1);
            if(this.user.email === ''){
                this.errors.push('Enter your e-mail address')
                return;
            } else if(!emailValidation.test(this.user.email)){
                this.errors.push('Make sure your e-mail address is correct')
                return ;
            } else if(this.user.password === '') {
                this.errors.push('Enter your password')
                return;
            } else if(this.user.password.length < 8){
                this.errors.push('Password length should be 8 to 15')
                return;
            } else if(this.user.name === ''){
                this.errors.push('Enter your name')
                return;
            } else if(this.user.name.match(/^[0-9]+$/)){
                this.errors.push('Your name must consist of letters')
                return;
            } else if(this.user.address.street === '') {
                this.errors.push('Enter your address')
                return; 
            } else if(this.user.address.zip === ''){
                this.errors.push('Enter your zip code')
                return;
            } else if(!zipValidation.test(this.user.address.zip)){
                 this.errors.push('Make sure the zip code is correct')
                 return;
            } else if(this.user.address.city === '') {
                this.errors.push('Enter your city')
                return; 
            }
            else {
                return true;
            }
        }
    },
}
</script>

<style scoped>
/* 
.wrapper{
    background-color: black;
} */

.register-main {
    background-color: white;
    width: 95%;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input-form {
    display: grid;
    grid-template-rows: 3rem 3rem 3rem 3rem 3rem 3rem 3rem 3rem;
    /* grid-template-columns: 20rem 20rem; */
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
}

input {
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #2F2926;
    margin-right: 20px;
    margin-left: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

label {
    margin-top: 25px;
    margin-left: 20px;
    text-align: left;
}

.label-for-email {
    grid-row: 1/2;
    grid-column: 1/2;
    text-align: left;
}

.email {
    grid-row: 2/3;
    grid-column: 1/2;
}

.label-for-password {
    grid-row: 1/2;
    grid-column: 2/3;
}

.password {
    grid-row: 2/3;
    grid-column: 2/3;
}

.label-for-name {
    grid-row: 3/4;
    grid-column: 1/2;
}

.name {
    grid-row: 4/5;
    grid-column: 1/3;
}

.label-for-street {
    grid-row: 5/6;
    grid-column: 1/2;
}

.street {
    grid-row: 6/7;
    grid-column: 1/3;
}

.label-for-zip {
    grid-row: 7/8;
    grid-column: 1/2;
}

.label-for-city {
    grid-row: 7/8;
    grid-column: 2/3;
}

.zip {
    grid-row: 8/9;
    grid-column: 1/2;
}

.city {
    grid-row: 8/9;
    grid-column: 2/3;
}

.button {
    margin-top: 50px;
    margin-bottom: 50px;
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
}

.button input:hover {
    background-color: black;
    color: white;
    border: none;
}

.error {
    color: rgb(228, 15, 15);
}

/* .alert-color{
    border-color: rgb(228, 15, 15);
} */

ul {
    list-style: none;
    padding-left: 0px;
}



</style>