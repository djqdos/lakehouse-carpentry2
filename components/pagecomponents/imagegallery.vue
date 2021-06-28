<template>
    
    <!-- <div class="page-max image-gallery">
        <img v-for="(image, index) in block.imagegallery" :key="index" :src="image.image" @click="showModal" />                
    </div> -->

    <div class="page-max">
        
            <vue-masonry-wall :items="block.imagegallery"
                              :options="masonryOptions">                                                                    
                <template v-slot:default="{item}">
                    <div class="item">
                        <img :src="item.image" @click="showModal" />
                    </div>
                </template>

            </vue-masonry-wall>
    </div>

</template>

<script>
import VueMasonryWall from 'vue-masonry-wall'
import imagegallerymodal from '~/components/pagecomponents/imagegallery_modal.vue'

export default {
    name: "imagegallery",
    props: {
        block: Object
    },

    data() {
        return {
            masonryOptions: {
                width: 300,
                padding: {
                    2: 4,     
                    3: 4,               
                    default: 4
                }
            }
        }
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

    components: {
        VueMasonryWall,
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
