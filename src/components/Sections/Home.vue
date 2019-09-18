<template>
    <section id="Home">
        <router-view> 
        </router-view>
        <nav>
            <router-link :to="{name: 'Intro'}"></router-link>
            <router-link :to="{name: 'Github'}"></router-link>
            <a></a>
            <a></a>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
#Home{
    background: url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
#Home nav{
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}
#Home nav a{
    width: 50px;
    height: 50px;
    border: 7px white solid;
    border-radius: 50%;
    margin: 20px;
    display: block;
    cursor: pointer;
    position: relative;
    box-shadow: 0px 0px 38px 0px rgba(0,0,0,0.53);
}
#Home nav a.router-link-exact-active::after{
    content: '';
    width: 25px;
    height: 25px;
    background: white;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>