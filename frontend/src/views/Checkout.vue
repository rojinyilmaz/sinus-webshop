<template>
<div class="wrapper">
  <main class="checkout">
    <img class="logo" src="../assets/Sinuscheckout.svg"/>
    
<hr class="line1"/>
      <h3>Delivery adress</h3>
      <form class="delivery">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname">

    <label for="email">Email</label>
    <input type="text" id="email" name=" mail">

<label for="number">Number</label>
<select id="countrycode" name="countrycode">
      <option value="+46">+46</option>
      <option value="+49">+49</option>
      <option value="+47">+47</option>
    </select>
    <input type="text" id="number" name="number">

    <label for="adress">Delivery adress</label>
    <input type="text" id="adress" name=" adress">
  
    <input class="submit" type="submit" value="Submit">
  </form>
  
  </main>
</div>
</template>

<script>


export default {
components:{

}
}
</script>

<style scoped>
.wrapper{
    background-color: black;
     height: 89vh;
    margin-left: -1%;
  margin-right: -1%;
  margin-bottom: -1%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.checkout{
    background-color: #ffff;
    display: flex;
        flex-direction: column;
        text-align: left;
        width: 96%;
        height: 84vh;
        border-radius: 3px;
}

.logo{
  
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
}

.line1{
    border: 2px solid black;
    width: 90%;
    margin-top: 1rem;
}


h3{
    text-decoration: underline;
    margin-left: 3em;
}

label{
  font-size: 15px;
}

input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}

#countrycode{
  width: 5%
}

.submit{
  width: 20%;
  background-color: #36B52B;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.delivery {
  display: grid;
  grid-template-columns: 1fr;
    grid-gap: 1px;
  border-radius: 5px;
  background-color: #ffff;
  padding: 20px;
}



</style>