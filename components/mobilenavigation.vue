<template>
    <transition name="mobilemenu"
                @after-enter="afterEnter"
                @after-leave="afterLeave"
                >
    <div class="mobile-menu">
        <div class="mobile-header">
            <div class="logo">                
                <img src="~assets/img/lakehouse-logo.png" />                
            </div>

            <div class="burger" @click="closeMobileMenu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>

        <div class="mobile-content">

                <nuxt-link v-for="page in pages" :key="page.slug"
                           :to="page.slug" class="hover navlink"
                           @click.native="closeMobileMenu"
                           >
                    {{ page.title }}
                </nuxt-link>                                    

                <nuxt-link :to="staticpages.slug" class="hover navlink"
                           @click.native="closeMobileMenu"
                           >
                    {{ staticpages.title }}
                </nuxt-link>        

            <button class="contact-button" @click="gotoContact">
                <fa :icon="['fas', 'envelope']" />
                Contact
            </button>

            <sociallinks />
        </div>
    </div>
    </transition>
</template>

<script>
import sociallinks from './sociallinks.vue';
export default {
  components: { sociallinks },
    name: "MobileNavigation",    

    data() {
        return {
            pages: [],
            globalcontent: [],
            staticpages: []
        }
    },

    async fetch() {        
        this.pages = await this.$content("pages").fetch();
        this.globalcontent = await this.$content("global").fetch(); 
        this.staticpages = await this.$content("contact").fetch();        
    },

    methods: {
        closeMobileMenu() {
            this.$emit("closeMobileMenu")
        },
        gotoContact() {
            this.$emit("closeMobileMenu");
            this.$router.push("/contact");
        },

        afterEnter(el) {
            console.log("afterEnter");
            document.body.style.overflow = "hidden";
        },
        afterLeave(el) {
            document.body.style.overflow = "";
        }
    },}
</script>

<style scoped lang="scss">

    .mobile-menu {                        
        color: white;       
        background-color: rgba(0,0,0,0.9);
        
        position: absolute;
        z-index: 3;
        height: 100vh; 
        width: 100vw;

        .mobile-header {
            display: flex;                
            min-height: var(--header-height);
            align-items: center;

            .logo {
                margin-right: auto;
                padding: .5em;
                a { color: white; }                
                img { width: 200px; }
            } 

           .burger { 
                display: block;                
                margin-right: 1em;
                margin-top: -1em;
                display: block;

                div {
                    width: 25px;
                    height: 3px;
                    background-color: rgb(226, 226, 226);
                    margin: 5px;                       

                    &.line1 { transform: rotate(-45deg) translate(-5px,6px); }
                    &.line2 { opacity: 0; }
                    &.line3 { transform: rotate(45deg) translate(-5px,-6px); }
                }
            }       
        }        

        .mobile-content {
            padding: 1em;
            display: flex;
            flex-direction: column;
            position: relative;
            height: 82vh;
        }

        .contact-button {      
            margin-top: 1em;                                          
            padding: 1em;
            font-weight: bold;
            border-radius: 5px;
            font-size: 20px;
        }


        .navlink {
            color: white;
            padding: 1em;
            text-align: center;
            font-size: 1.3em;

            // opacity: 0;
        }
    }

</style>