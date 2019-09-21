<template>
    <div class="day-container">
        <div 
            class="day"
            :style="{
                transform: `translate(${(daySize*index)*2}px,0)`
            }"
            @transitionend="removeInlineStyles('.commit')"
        >
        </div>
        <div class="commits">
            <div 
                class="commit"
                v-for="(commit, index) in day.commits"
                :key="index+'A'"
                :style="{
                    transform: `translate(0,-${(daySize*index)+((daySize/2)*index)}px)`,
                    opacity: 0
                }"      
            >

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Day',
    props:['daySize', 'day', 'index'],
    data(){
        return{

        }
    },
    methods:{
        removeInlineStyles(el){
            this.$el.querySelectorAll(el).forEach(day=>{
                day.style.removeProperty('transform')
                day.style.removeProperty('opacity')
            }) 
        }
    },
    mounted(){
        setTimeout(()=>{
            this.$el.querySelector('.day').style.removeProperty('transform')
        },1000)
    }
}
</script>

<style>
#Github .day{
    width: 20px;
    height: 20px;
    background: orange;
    margin: 10px;
    margin-bottom: 0;
    transition: 1s;
}
#Github .day-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
#Github .day-container .commits{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}
#Github .day-container .commit{
    width: 20px;
    height: 20px;
    margin: 5px 0;
    background: purple;
    transition: 1s;
}
</style>