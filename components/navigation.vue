<template>
    <nav class="main-menu">
        <div class="logo">
            <nuxt-link to="/">
                <img src="~assets/img/lakehouse-logo.png" alt="Lakehouse Carpentry logo" />
            </nuxt-link>
        </div>

        <ul class="menus" v-if="pages && staticpages">
            <li v-for="page in pages" :key="page.slug">
                <nuxt-link :to="page.slug">{{ page.title }}</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="staticpages.slug">{{ staticpages.title }}</nuxt-link>
            </li>
        </ul>

        <button class="mobile-menu-button" @click="navSlide">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>


        <aside class="mobile-nav-wrapper transform -translate-x-full">
            <nav class="mobile-menu">
                <div class="logo">
                    <nuxt-link to="/" @click.native="navSlide">
                        <img src="~assets/img/lakehouse-logo.png" alt="Lakehouse Carpentry logo" />
                    </nuxt-link>
                </div>               
            </nav>
            <ul class="mobile-links" v-if="pages && staticpages">
                <li v-for="page in pages" :key="page.slug">
                    <nuxt-link :to="page.slug" class="hover" @click.native="navSlide">{{ page.title }}</nuxt-link>
                </li>

                <li>
                    <nuxt-link :to="staticpages.slug" @click.native="navSlide" class="hover">{{ staticpages.title }}</nuxt-link>
                </li>
            </ul>
                <button class="mobile-menu-button" @click="navSlide">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                </button>             
        </aside>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            pages: [],
            staticpages: []
        }
    },

    async fetch() {
        this.pages = await this.$content("pages")
        //.where({ showonsite : { $eq : true } })
        .fetch();      
        
        this.staticpages = await this.$content("contact")
        //.where({ showonsite : { $eq : true } })
        .fetch();       


        const temp = await this.$content("pages")
        .only(['title', 'slug', 'showonsite', 'showinnav'])
        .fetch();
    },

    mounted() {        
        
    },

    methods: {
        navSlide(e) {            
            const mobileMenu = document.querySelector(".mobile-nav-wrapper");                        
            mobileMenu.classList.toggle("-translate-x-full");
        }
    }
}
</script>


<style scoped lang="scss">    
    nav.main-menu {
        @apply flex overflow-hidden absolute w-full items-center justify-between; 
        @apply h-28 p-6 z-10;
        // @apply bg-gradient-to-b from-black;
    }

    nav.mobile-menu {
        @apply flex overflow-hidden w-full items-center justify-between; 
        @apply h-40 p-6 z-10;
    }

    nav.main-menu {
      background: linear-gradient(180deg,rgba(0,0,0,.65) 0,transparent);  
    }

    .logo {
        img {
            @apply w-52;
        }
    }


    .menus {
        @apply hidden md:block;

        li {
            @apply relative inline p-2 list-none;
            
            a {
                @apply text-white text-sm md:text-lg lg:text-2xl font-bold;
            }
        }
    }

    .mobile-links {
        @apply text-white;
    }

    .mobile-menu-button {
        @apply sm:block md:hidden text-white -mt-4;

        svg {
            @apply h-8 w-8;

        }
    }



    .mobile-nav-wrapper {
        @apply top-0 left-0 w-80 fixed h-full z-10;
        @apply transition-all ease-in-out duration-300;        
        background-color: rgb(0,0,0);

        .logo {
            @apply flex items-center;
        }

        .mobile-menu-button {
            @apply absolute p-2 rounded;
            top: 50%;
            right: -30px;
            opacity: .5;
            background: rgb(0,0,0);
            transform: translateY(-50%);

            svg {
                @apply h-6 w-6;
            }
        }

        .mobile-links {
            li {
                @apply block p-4 pl-8;
            }
        }
    }

</style>