<template>
    <div class="page-max">
        <div class="spotlight-container">
            <div class="spotlight" v-for="spotlight in block.spotlight" :key="spotlight.title">
                {{ spotlight.title }}

                <img :src="spotlight.image" />

                <p>{{ spotlight.text }}</p>
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
    .spotlight-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
        margin: 1em 0;
        background-color: #e4e4e4;
    }

    .spotlight {
        
        
        color: black;
        padding: 1em;        
        img {
            margin: 1em 0;
        }

    }
</style>