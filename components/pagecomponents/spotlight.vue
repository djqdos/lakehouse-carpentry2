<template>
    <div class="spotlight-container">                
        <div class="page-max">      
            <h2 class="heading">{{ block.heading }}</h2>      
            <div class="grid">
                <div class="spotlight" v-for="spotlight in block.spotlight" :key="spotlight.title">                
                    <img :src="spotlight.image" />
                    <h4>{{ spotlight.title }}</h4>
                    <p class="text">{{ spotlight.text }}</p>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
//import { intersectionMixin } from '~/mixins/intersectionObserver.js'

export default {
    //mixins: [intersectionMixin],
    name: "spotlight",
    props: {
        block: Object
    }
}
</script>

<style scoped lang="scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;        
    }

    .spotlight-container {
        background-color: #e4e4e4;           
    }

    .spotlight {                
        color: black;
   
        img {
            margin: 1em 0;
        }

        h4 {
            font-size: 1.2rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
</style>