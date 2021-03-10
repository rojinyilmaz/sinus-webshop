<template>

    <div class="slide hi-slide">
        <div class="hi-prev"></div>
        <div class="hi-next"></div>
        <ul>
            <li>
                <img src="../assets/hoodie-fire.png">
            </li>

            <li>
                <img src="../assets/img/sinus-skateboard-eagle.png">

            </li>

            <li>
                <img src="../assets/img/sinus-skateboard-ink.png">
            </li>

        </ul>
    </div>
  

</template>


<script>
export default {

}
</script>

<style scoped>
body{
    font-family:;
    overflow: hidden;
}
.hi-slide{
    position: relative;
    width: 754px;
    height: 292px;
    margin: 115px auto 0;
}

.hi-slide .hi-next,
.hi-slide .hi-prev{
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    margin-top: 29px;
    border-radius: 50px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background-color: pink;
    color: rgb(8, 8, 8);
    transition: all 0,7s;
    font-size: 20px;
    font-weight: bold;
}
.hi-slide .hi-next:hover,
.hi-slide .hi-prev:hover{
    opacity: 1;
    background-color: pink;
}

.hi-slide .hi-prev{
    left: -70px;
}
.hi-slide .hi-prev::before{
    content: '<';
}
.hi-slide .hi-next{
    right: -70px;
}
.hi-slide .hi-next::before{
    content: '>';
}
.hi-slide > ul{
    list-style: none;
    position: relative;
    width: 754px;
    height: 292px;
    padding: 0;
    margin: 0;

}

.hi-slide > ul > li{
    overflow: hidden;
    position: absolute;
    z-index: 0;
    left: 377px;
    top: 147px;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border: 3px solid white;
    background-color: #333;
    cursor: pointer;
}

.hi-slide > ul > li > img{
    width: 100%;
    height: 100%;
    background-position: center;
}


</style>