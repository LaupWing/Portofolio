<template>
    <div class="day-container">
        <div 
            class="day"
            :style="{
                transform: `translate(${(daySize*index)*2}px,0)`
            }"
            @transitionend="removeInlineStyles('.commit')"
            @mouseover="showTooltip('day')"
            @mouseout="showTooltip"
        >
        <div v-if="tooltip === 'day'" class="tooltip-day">
            <h2>{{day.year}}</h2>
            <p>{{monthNames[day.month-1]}}{{day.day}}</p>
        </div>
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
                @mouseover="showTooltip(commit)"
                @mouseout="showTooltip"
            >
                <div v-if="tooltip === commit" class="tooltip-commit">
                    <h2>{{commit.repo}}</h2>
                    <p>{{commit.message}}</p>
                </div>
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
            monthNames : ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ],
            tooltip: null
        }
    },
    methods:{
        removeInlineStyles(el){
            this.$el.querySelectorAll(el).forEach(day=>{
                day.style.removeProperty('transform')
                day.style.removeProperty('opacity')
            }) 
        },
        showTooltip(typeTP){
            if(typeTP){
                this.tooltip = typeTP
            }else{
                this.tooltip = null
            }
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
    position: relative;
}
#Github .day-container .tooltip-day{
    position: absolute;
    top: 0;
    transform: translate(-50%,-100%);
    left: 50%;
    background: white;
    z-index: 1000;
    border-radius: 5px;
}
#Github .day-container .tooltip-commit{
    position: absolute;
    top: 0;
    transform: translate(-50%,-120%);
    left: 50%;
    background: white;
    z-index: 1000;
    border-radius: 5px;
}
#Github .day-container .tooltip-day::after,
#Github .day-container .tooltip-commit::after{
    content: '';
    width: 20px;
    height: 20px;
    background: white;
    position: absolute;
    transform: rotate(45deg) translate(-50%,10%);
    left: 50%;
    bottom: -15px;
    z-index: -1;
}
#Github .day-container .tooltip-day h2,
#Github .day-container .tooltip-day p,
#Github .day-container .tooltip-commit h2,
#Github .day-container .tooltip-commit p{
    font-size: .8em;
    margin: 5px;
    text-align: center;
    white-space: nowrap;
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
    transition: 1s transform;
    position: relative;
}
</style>