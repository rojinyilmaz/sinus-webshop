<template>
<section class="productSection">
    <div v-for ="c in result" :key=c._id>
        <div class="pwrapper">
        <img :src="require(`../assets/${c.imgFile}`)"/>
            <router-link :to="{name: 'SingleProduct', params: {id: 1}}"> {{c.title}} </router-link> 
            <p>{{c.shortDesc}}</p>
            <h5>{{c.price}} €</h5>
        </div>
    </div>
</section>

</template>

<script>
export default {
    data: function() {
        return { result: null}
    },
   created: function () {
      fetch("http://localhost:5000/api/products")
        .then(r => r.json())
        .then(json => {
          this.result=json;
          console.log(json)
        });
    },
computed:{
  
}

}

</script>
<style>


.productSection{
    text-align: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    padding-left: 2em;
    padding-right: 2em;
}

.pwrapper, h4, h5, p{
    color:white;
}

img{
    width:143px;
    height:155px;
    object-fit: contain;
    background-color: white;
}

</style>
