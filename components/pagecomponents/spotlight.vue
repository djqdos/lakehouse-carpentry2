<template>
    <div class="spotlight-container rb-container">                
        <div class="page-max mx-auto">      
            <h2 class="main-heading">{{ block.heading }}</h2>      
            <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="spotlight" v-for="spotlight in block.spotlight" :key="spotlight.title">                
                    <img :src="spotlight.image" />
                    <h4 class="sm:text-2xl mb-4 mt-2">{{ spotlight.title }}</h4>
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

</style>