<template>
    <header id="Nav">
        <div class="navigation">
            <div class="logo">
                <h1 class="trade-mark">Portofolio</h1>
            </div>
            <nav>
                <li
                    v-for="(item,index) in liItems"
                    :key="index"
                    :class="{'trade-mark' : item.toLowerCase() === section.toLowerCase()}"
                >
                    <a @click="goTo(item)">{{item}}</a>
                </li>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Nav',
    props:['section'],
    data(){
        return{
            liItems: ['Home', 'Projects', 'Contact', 'Resume']
        }
    },
    methods:{
        goTo(item){
            const section = document.querySelector(`#${item}`) 
            document.querySelector('#app').scrollTo(0, section.offsetTop)
        }
    }
}
</script>

<style>
header#Nav{
    position: fixed;
    background: var(--main-color);
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    transition: .5s;
    height: 90px;
    z-index: 1000;
}
header#Nav .navigation{
    width: 100%;
    max-width: var(--container-width);
    display: flex;
    justify-content: space-between;
}
header#Nav.expand{
    height: 100px;
}
header#Nav nav{
    display: flex;
    align-items: center;
}
header#Nav nav li{
    list-style: none;
    margin: 0 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: var(--second-color);
    cursor: pointer;
}


</style>