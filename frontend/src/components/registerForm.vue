<template>
  <div class="wrapper">
      <main class="register-main">
          <h1>Register User</h1>
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

<style lang="scss" scoped>

.register-main {
    background: white;
    border : 1px solid;
    width: 90%;
    border-radius: 20px;
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
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
}

input {
    outline: none;
    background-color: rgb(255, 255, 255);
    height: 35px;
    margin-right: 10px;
    margin-left: 3px;
    overflow: hidden;
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
    font-family: serif;
    font-size: 18px;
}

.email {
    grid-row: 2/3;
    grid-column: 1/2;
}

.label-for-password {
    grid-row: 1/2;
    grid-column: 2/3;
    font-family: serif;
    font-size: 18px;
}

.password {
    grid-row: 2/3;
    grid-column: 2/3;
}

.label-for-name {
    grid-row: 3/4;
    grid-column: 1/2;
    font-family: serif;
    font-size: 18px;
}

.name {
    grid-row: 4/5;
    grid-column: 1/3;
}

.label-for-street {
    grid-row: 5/6;
    grid-column: 1/2;
    font-family: serif;
    font-size: 18px;
}

.street {
    grid-row: 6/7;
    grid-column: 1/3;
}

.label-for-zip {
    grid-row: 7/8;
    grid-column: 1/2;
    font-family: serif;
    font-size: 18px;
}

.label-for-city {
    grid-row: 7/8;
    grid-column: 2/3;
    font-family: serif;
    font-size: 18px;
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

button.inver{
    background-color: transparent;
    border-color:#fff;
  }


.error {
    color: rgb(228, 15, 15);
    font-family: serif;
    font-size: 18px;
}

ul {
    list-style: none;
    padding-left: 0px;
}

h1{
    font-size: 40px;
    text-transform: uppercase;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

</style>