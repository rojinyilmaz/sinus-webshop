<template>
        <div class="pwrapper">
        <img :src="require(`../assets/${product.imgFile}`)"/>
            <router-link :to="{name: 'SingleProduct', params: {id: 1}}"> {{product.title}} </router-link> 
            <p>{{product.shortDesc}}</p>
            <h5>{{product.price}} €</h5>
        </div>
</template>

<script>
export default {
    props: {
product: Object
},
    data: function() {
        return { result: null}
    },
  
computed:{
  
},

}

</script>

<style>


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
