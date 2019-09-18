<template>
    <div id="Intro">
        <p>Hello my Name is Loc Nguyen</p>
        <p>And I am a frontend developer and currently studying at the HVA</p>
        <p class="disclaimer">DISCLAIMER:This animation is made by the library Animate.css. Refresh to see a new animation!</p>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data(){
        return{
            keyframesId: ["bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "slideInUp", "slideInDown", "slideInLeft", "slideInRight", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp"]
        }
    },
    mounted(){
        this.$el.querySelectorAll('#Intro p').forEach(paragraph=>{
            const randomNumber = Math.floor(Math.random()*(this.keyframesId.length-1))
            paragraph.style.setProperty('--animation-name', this.keyframesId[randomNumber])
        })
    }
}
</script>

<style>
#Intro{
    padding-left: 30vw;
}
#Intro p{
    --animation-name: defaultAnim;
    font-size: 2em;
    background: rgba(255,255,255,.6);
    padding: 10px;
    padding-bottom: 5px;
    max-width: 60vw;
    animation-name: var(--animation-name);
    animation-duration: 3s;
    animation-fill-mode: forwards;
    display: inline-block;
    margin: 10px;
}
#Intro p.disclaimer{
    font-size: 1em;
}
@keyframes defaultAnim {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
</style>