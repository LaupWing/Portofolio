<template>
    <section id="Home">
        <transition :name="transitionVal" mode="out-in">
            <router-view> 
            </router-view>
        </transition>
        <nav>
            <router-link 
                v-for="(item, index) in navigationItems" 
                :key="index" 
                event=""
                @click.native.prevent="setNextUrl(index, item)"
                :to="{name:item}"
            >
            </router-link>
            <a></a>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            transitionVal: 'firstEnter',
            nextIndex: 0,
            currentIndex: 0,
            navigationItems:['Intro', 'Github', 'Skills']
        }
    },
    methods:{
        setNextUrl(index, item){
            const path = this.$router.options.routes
                .find(route=>route.name===item).path 

            this.nextIndex = index
            console.log(this.nextIndex, this.currentIndex)
            if(this.nextIndex === 0){
                console.log(this.currentIndex)
                this.currentIndex = index
                this.transitionVal = ''
                this.$router.push(path)
            }
            else if(this.currentIndex < this.nextIndex){
                console.log(this.currentIndex)
                this.currentIndex = index
                this.transitionVal = 'higher'
                this.$router.push(path)
            }
            else if(this.currentIndex > this.nextIndex){
                console.log(this.currentIndex)
                this.currentIndex = index
                this.transitionVal = 'lower'
                this.$router.push(path)
            }
            
        }
    },
    created(){
        this.prevRoute = this.$route.path
    }
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

.lower-enter-active{
    animation: slideLeft 1s reverse;
}
.lower-leave-active{
    animation: slideRight 1s forwards;
}

.higher-enter-active{
    animation: slideRight 1s reverse;
}
.higher-leave-active{
    animation: slideLeft 1s forwards;
}
@keyframes slideRight {
    from{
        transform: translate(0,0);
    }
    to{
        transform: translate(100vw,0)
    }
}
@keyframes slideLeft {
    from{
        transform: translate(0,0);
    }
    to{
        transform: translate(-100vw,0);
    }
}
</style>