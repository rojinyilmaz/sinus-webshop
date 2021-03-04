<template>
        <div class="pwrapper">
        <img :src="require(`../assets/${product.imgFile}`)"/><br>
            <router-link :to="{name: 'SingleProduct', params: {id: 1}}" class="links"> {{product.title}} </router-link> 
            <p id="desc">{{product.shortDesc}}</p>
            <p id="price">{{product.price}} SEK</p>
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

.pwrapper, .links, p{
    color:black;
    padding-bottom: 1em;
}

.pwrapper{
    background-color: white;
    margin: 0.8em;
    padding: 2em;
    border-radius: 5px;
}

.links, #price, #desc{
    display: flex;
}
img{
    margin-bottom: 1em;
}

#price, #desc{
    font-size: 0.8em;
    padding: 0;
    margin: 0;
    margin-top: 0.2em;
    }

img{
    width:143px;
    height:155px;
    object-fit: contain;
    background-color: white;
}

</style>
