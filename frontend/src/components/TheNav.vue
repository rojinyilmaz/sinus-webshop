<template>
  <div>
      <div class="hamburger_btn" v-on:click='ActiveBtn=!ActiveBtn'>
      <span class="line line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
      <span class="line line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
      <span class="line line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
    </div>
    <transition name="menu">
        <div class="menu" v-show="ActiveBtn">
          <div class="menutext">
              <!-- <router-link to="/">Home</router-link> -->
          <ul>
            <router-link to="/menu">Skateboard</router-link>
            <router-link to="/about">Accessories</router-link> 
            <router-link to="/profile">Clothes</router-link> 
            <router-link to="/status">Home</router-link>
          </ul>
            </div>
        </div>
    </transition>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
    data() {
        return{
            ActiveBtn: false
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Esteban&display=swap');

.hamburger_btn {
  position: fixed; 
  top: 0;
  right: 40px;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  right: 20px;
  width: 32px;
  height: 2px;
  background: white;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}


.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu {
  background-color: black;
  z-index: 30;
  padding: 1rem 1rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 80rem;
  top: 0;
  right: 0;
  background-color: black;
}
.menutext{

  color: rgb(243, 243, 243);
  text-decoration: underline;
  font-size: 6rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: calc(100vh - 2rem);
  font-family: 'Esteban', serif;

}
ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 70%;
 
}

/*.menu a {
  color: rgb(156, 11, 11);
  text-decoration: underline;
  font-size: 3rem;
  padding: 0 2rem;
  justify-content: center;
}
*/
</style>