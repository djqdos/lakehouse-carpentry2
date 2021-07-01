<template>
  <div class="w-full overflow-x-hidden">
    <mobilenavigation v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    <Navigation @showMobileMenu="showMobileMenu = true" />
      <Nuxt />
    <Footer />
  </div>
</template>

<script>


export default {

  data() {
    return {
      showMobileMenu: false
    }
  },
}
</script>


