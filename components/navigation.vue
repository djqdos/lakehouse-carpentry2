<template>
    <nav>
        <div class="logo">
            <nuxt-link to="/">
                <img src="~assets/img/lakehouse-logo.png" alt="Lakehouse Carpentry logo" />
            </nuxt-link>
        </div>
        <ul class="nav-links">

            <li v-for="page in pages" :key="page.slug">
                <nuxt-link :to="page.slug" class="hover">{{ page.title }}</nuxt-link>
            </li>

            <li>
                <nuxt-link :to="staticpages.slug" class="hover">{{ staticpages.title }}</nuxt-link>
            </li>

        </ul>

        <div class="burger" @click="navSlide">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
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
        .where({ showonsite : { $eq : true } })
        .fetch();      
        
        this.staticpages = await this.$content("contact")
        .where({ showonsite : { $eq : true } })
        .fetch();              
    },

    mounted() {        

        const navLinks = document.querySelectorAll(".nav-links li");
    },

    methods: {
        navSlide() {
            this.$emit('showMobileMenu');
            const burger = document.querySelector(".burger");
            //burger animation
            burger.classList.toggle("burgerToggle");
        }
    }
}
</script>


<style scoped lang="scss">    
    .burger {
        display: none;
    }

    .burger {
        cursor: pointer;
    }

    .burger div {             
        width: 25px;
        height: 3px;
        background-color: rgb(226, 226, 226);
        margin: 5px;        

        transition: all 0.3s ease-in;
    }

    nav {        
        display: flex;                
        min-height: var(--header-height);
        align-items: center;
        color: white;       
        
        position: absolute;
        top: 0;
        left:0;
        right:0;
        z-index: 2;

        background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

        // box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.5);

        .logo {
            margin-right: auto;
            padding: .5em;
            margin-top:1.5em;


            a {
                color: white;
            }
            
            img {
                margin-left: 1em;
                width: 250px;
            }
        }        
    }

    .nav-links {        
        display: flex;        
        margin-right: 1em;        
    }

    .nav-links li {       
        margin: 1em; 
        list-style: none;
    }

    .nav-links a {
        color: rgb(226,226,226);
        text-decoration: none;
        letter-spacing: 3px;
        font-weight: bold; 
        position: relative;   



    }

    .burgerToggle {
        .line1 {
            transform: rotate(-45deg) translate(-5px,6px);
        }

        .line2 {
            opacity: 0;
        }
        .line3 {
            transform: rotate(45deg) translate(-5px,-6px);
        }
    }


    @media screen and (max-width: 768px) {
        
        :root {
            --header-height: 25vh;
        }
        

        body {
            overflow-x: hidden;
        }

        .logo {
            width: 200px;    
            margin-top: 0 !important;        
        }

        .nav-links {
            display: none;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            height: 100vh;
            width: 100vw;
            background-color: var(--clr-secondary);                                    
            opacity: 0;
            transition: all 0.3s ease-in;

            li {
                opacity: 0;
            }
        }    

        .burger { 
            align-content: top;
            margin-right: 1em;
            margin-top: -1em;
            display: block;
        }
    }
    
    .nav-active {
        display: block;
        opacity: 1;
        transform: translateX(0%);
    }     

</style>