<template>
    
    <!-- <div class="page-max image-gallery">
        <img v-for="(image, index) in block.imagegallery" :key="index" :src="image.image" @click="showModal" />                
    </div> -->

    <div class="page-max">
        <client-only>
            <div v-masonry 
                 transition-duration="3s" 
                 item-selector=".item"
                 percent-position="true"

                 class="masonry-container">

                <div v-masonry-tile
                     class="item"
                     v-for="(image, index) in block.imagegallery"
                     :key="index">

                        <img :src="image.image" :alt="image.title" @click="showModal" />

                </div>

            </div>
        </client-only>
    </div>

</template>

<script>
import imagegallerymodal from '~/components/pagecomponents/imagegallery_modal.vue'

export default {
    name: "imagegallery",
    props: {
        block: Object
    },

    methods: {
        showModal(e) {
            var data = {
                selected: e.target.src,
                imgs: this.block.imagegallery                
            };
            this.$modal.show(imagegallerymodal, { block: data })
      
      }
    },

    mounted () {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
    },

    components: {
        imagegallerymodal
    }
}
</script>

<style scoped lang="scss">
    .image-gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: masonry;
        margin-top: 1em;
        gap: .5em;        
    }


    // Masonry
    .masonry-container {
        column-count: 4;
        column-gap: .5em;
    }

    .item {
        width: 100%;
        margin: .3em;
    }

    @media screen and (max-width: 768px) { 
        .masonry-container {
            column-count: 2;
            column-gap: .5em;
        }
    }
</style>
