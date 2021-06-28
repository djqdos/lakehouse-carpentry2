<template>
        <section class="main" :style="{ backgroundImage :`url(${block.backgroundimage})` }">
            <div class="page-max">
                <div class="hero">
                    <h1 v-if="block.title">{{ block.title }}</h1>
                    <p class="subtitle" v-if="block.subtitle">{{ block.subtitle }}</p>
                </div>
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
            targets: 'p.subtitle',
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
    .main {
        opacity: 0;
    }
</style>
