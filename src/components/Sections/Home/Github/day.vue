<template>
    <div 
        class="day"
        :style="{
            transform: `translate(${(daySize*index)*2}px,0)`
        }"
    >
        <div class="commits">
            <div 
                class="commit"
                v-for="(commit, index) in day.commits"
                :key="index+'A'"
                :style="{
                    transform: `translate(0,-${(daySize*index)+((daySize/2)*index)}px)`
                }"      
            >

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'day',
    props:['daySize', 'day', 'iets'],
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style>

</style>