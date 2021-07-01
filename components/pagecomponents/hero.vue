h<template>
        <section class="hero-container h-screen bg-no-repeat bg-center bg-cover grid place-items-center" 
                :style="{ backgroundImage :`url(${block.backgroundimage})` }">
            
                <div class="hero">
                    <h1 v-if="block.title"
                        class="text-white mb-4 opacity-0 text-6xl lg:text-8xl ">{{ block.title }}</h1>
                    <h2 v-if="block.subtitle"
                        class="opacity-0 text-3xl lg:text-5xl text-white">{{ block.subtitle }}</h2>
                </div>
        </section>
</template>

<script>
export default {
    name: "hero",
    props: {
        block: Object
    },
    mounted() {
        this.$anime({
            targets: '.hero h1',
            opacity: [0, 1],
            translateX: [100, 0],
            easing: 'easeOutCubic',
            duration: 800,
            delay: 1200
        });

        this.$anime({
            targets: 'h2',
            opacity: [0, 1],
            translateX: [100, 0],
            easing: 'easeOutCubic',
            duration: 800,
            delay: 1400
        });

        this.$anime({
            targets: '.hero img',
            opacity: [0, 1],
            translateX: [100, 0],
            easing: 'easeOutCubic',
            duration: 800,
            delay: 1600
        });        

        this.$anime({
            targets: 'section.main',
            opacity: [0, 1],
            scale: [1.2, 1],
            easing: 'easeOutCubic',
            duration: 1200,            
        });          
    },
}
</script>

<style scoped lang="scss">
    .hero {
        h1, h2, h3, h4, h5, h6 {
            font-family: "Open Sans", sans-serif;
            font-weight: bold;
            text-shadow: 5px 5px 4px rgba(0,0,0,0.5);
            text-align: center;
            word-wrap: normal;                                      
        }

        //@apply w-3/5 md:w-full;
        @apply w-full;
    }
</style>
