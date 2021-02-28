<template>
<section class="productSection">
    <div v-for ="c in test" :key=c.id>
        <div class="pwrapper">
            <img src='@/assets/skateboard-greta.png'>
            <h4>{{c.name}}</h4>
            <p>{{c.desc}}</p>
            <h5>{{c.price}} €</h5>
        </div>
    </div>
    <div v-for ="c in testc" :key=c.id>
        <div class="pwrapper">
            <img src='@/assets/hoodie-fire.png'>
            <h4>{{c.name}}</h4>
            <p>{{c.desc}}</p>
            <h5>{{c.price}} €</h5>
        </div>
    </div>
</section>
  
</template>

<script>
export default {

computed:{
    test()
    {
        return this.$store.getters.skateboards;
    },
    testc()
    {
        return this.$store.getters.clothes;
    }
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