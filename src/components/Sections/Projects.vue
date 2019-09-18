<template>
    <section id="Projects">
        <div class="title">
            <h2 class="trade-mark">Projects</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projects',
    mounted(){
        const heightNav = document.querySelector('header#Nav').offsetHeight
        this.$el.querySelector('.title').style.top = `${heightNav}px`
    }
}
</script>

<style>
#Projects{
    background: var(--main-color);
    position: relative;
}
#Projects .title{
    position: absolute;
    top: 0;
}
#Projects h2{
    position: relative;
    font-size: 2em;
}
</style>