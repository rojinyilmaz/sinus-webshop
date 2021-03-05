<template>
  <div class="containerNav">
     <nav class=navbar>
         <div class="hamburger-menu">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </div>

        <ul class="nav-list">
            <li><router-link to="/skateboards">Skateboards</li>
            <li><router-link to="/accessories">Accessories</li>
            <li><router-link to="/clothes">Clothes</li>
            <li><router-link to="/home">Home</li>
        </ul>
     </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoepd>
@import url('https://fonts.google.com/specimen/Esteban?preview.text_type=custom');

.containerNav{
    width: 100%;
    height: 100vh;

}
/* Stoppa detta i navbar klassen som är i home komponenten för att få det att
 fungera, Detta styr själva navbar menyn som kommer ut*/ 
.navbar {
    width: 300px;
    height: 100%;
    background-color: black;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hamburger-menu {
  width: 35px;
  height: 39px;
  position: fixed;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.line {
  width: 100%;
  height: 3px;
  background-color: white;
}
</style>