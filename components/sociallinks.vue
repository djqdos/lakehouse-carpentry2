<template>
    <div class="social-links">
        <a v-if="globalcontent.linkedinusername" :href="`https://www.instagram.com/${globalcontent.instagramusername}`"><fa :icon="['fab', 'linkedin']" /></a>        
        <a v-if="globalcontent.facebookusername" :href="`https://www.instagram.com/${globalcontent.facebookusername}`"><fa :icon="['fab', 'facebook']" /></a>
        <a v-if="globalcontent.twitterusername"  :href="`https://www.instagram.com/${globalcontent.twitterusername}`"><fa :icon="['fab', 'twitter']" /></a>
    </div>
</template>

<script>
export default {
    name: "sociallinks",
    data() {
        return {
            globalcontent: []
        }
    },
    async fetch() {                
        this.globalcontent = await this.$content("global").fetch();                         
    },
}
</script>

<style scoped lang="scss">
    .social-links {
        a {
            color: white;
        }
    }
</style>
