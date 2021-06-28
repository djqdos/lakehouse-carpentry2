<template>
    <main>        
        <hero :block="content.hero" />
        
        <template v-for="section in content.sections">
            <component v-intersection :is="section.type" :block="section" :key="section.type"></component>
        </template>        
    </main> 
</template>

<script>
import metadataMixin from '@/mixins/metadata'

export default {    
  mixins: [metadataMixin],

  async asyncData({ $content }) {
    const content = await $content("home").fetch();
    const globalSettings = await $content("global").fetch();    
    return {
      content,
      globalSettings,      
    }
  },  


}
</script>

<style scoped lang="scss">
    main {
      color: black;          
      width: 100vw;
    }

    .hero {
    color: white;    
    h1 {
        opacity: 0;
        font-size: 4.5vmax;     
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);       
    }

    p.subtitle {
        opacity: 0;
        font-size: 3vmax;
        letter-spacing: -1px;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);       
    }

    img {
        opacity: 0;
    }
}
</style>

