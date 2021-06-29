<template>
  <!-- <div class="page-max image-gallery">
        <img v-for="(image, index) in block.imagegallery" :key="index" :src="image.image" @click="showModal" />                
    </div> -->
  <div class="imagegallery-container">
    <div class="page-max">
      <h2 v-if="block.heading" class="heading">{{ block.heading }}</h2>

      <vue-masonry-wall :items="block.imagegallery" :options="masonryOptions">
        <template v-slot:default="{ item }">
          <div class="item">
            <img :src="item.image" @click="showModal" />
            <div class="project-text">
              <div class="project-details">
                  <h4>{{ item.title }}</h4>
                {{ item.text }}
              </div>
            </div>
          </div>
        </template>
      </vue-masonry-wall>
    </div>
  </div>
</template>

<script>
import VueMasonryWall from 'vue-masonry-wall'
import imagegallerymodal from '~/components/pagecomponents/imagegallery_modal.vue'

export default {
  name: 'imagegallery',
  props: {
    block: Object,
  },

  data() {
    return {
      masonryOptions: {
        width: 400,
        padding: {
          2: 4,
          3: 4,
          default: 4,
        },
      },
    }
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

  components: {
    VueMasonryWall,
    imagegallerymodal,
  },
}
</script>

<style scoped lang="scss">
.image-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  margin-top: 1em;
  gap: 0.5em;
}

// Masonry
.masonry-container {
  column-count: 2;
  column-gap: 0.5em;
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

@media screen and (max-width: 768px) {
  .masonry-container {
    column-count: 2;
    column-gap: 0.5em;
  }
}
</style>
