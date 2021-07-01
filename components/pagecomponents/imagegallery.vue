<template>
  <!-- <div class="page-max image-gallery">
        <img v-for="(image, index) in block.imagegallery" :key="index" :src="image.image" @click="showModal" />                
    </div> -->
  <div class="imagegallery-container">
    <div class="page-max">
      <h2 v-if="block.heading" class="main-heading">{{ block.heading }}</h2>

      <div class="imageGalleryGrid">
        <div class="item" 
             v-for="(item, index) in block.imagegallery"
             :key="index">          
            <img :src="item.image" @click="showModal" />
            <div class="project-text">
              <div class="project-details">
                  <h4>{{ item.title }}</h4>
                {{ item.text }}
              </div>
            </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imagegallery',
  props: {
    block: Object,
  },

  methods: {
    showModal(e) {
      var data = {
        selected: e.target.src,
        imgs: this.block.imagegallery,
      }
      this.$modal.show(imagegallerymodal, { block: data })
    },
  },
}
</script>

<style scoped lang="scss">
  .imageGalleryGrid {
    @apply grid grid-cols-2 gap-4;
    @apply md:grid-cols-4 grid-flow-row-dense;
  }



.item {
  width: 100%;
    position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $accent-color;
    opacity: 0.9;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 300ms linear 0s;
  }

  &:hover::before {
    z-index: 1;
    transform: scale(1);
  }

  &:hover .project-text {
    opacity: 1;
    z-index: 3;
  }
}

.project-text {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.project-details {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: .9rem;
}
</style>
