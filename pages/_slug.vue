<template>
    <main>
        <hero :block="content.hero"></hero>

        <template v-for="(section, index) in content.sections">
            <div class="page-max" v-if="isStyleGuide" :key="`style-header-${section.type}`">
                <div class="style-guide-header">
                    Section Name: '{{ section.type }}'
                </div>
            </div>

            <component v-intersection :is="section.type" :block="section" :key="index"></component>
        </template>

    </main>
</template>

<script>
import metadataMixin from '@/mixins/metadata'

export default {
    mixins: [metadataMixin],
    
    async asyncData({ $content, params, error}) {
        let content = await $content("pages", params.slug)
        .fetch();

        let settings = await $content("global")
        .fetch();

        return {
            content,
            settings
        }
    },

    computed: {
        isStyleGuide: function() {
            return this.content.title.toLowerCase().includes('style');            
        }
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
    .style-guide-header {
        font-size: 2em;
        border: 5px solid black;
        padding: .2em;
        margin-top: 1em;
    }
</style>