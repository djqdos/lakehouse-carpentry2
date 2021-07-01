<template>
    <footer> 
        <div class="upper-footer">
            <div class="page-max">
                <img class="logo" src="~assets/img/lakehouse-logo.png" alt="Lakehouse Carpentry logo" />
                <div class="contact-details">
                    <div class="contact-details-item phone">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        022123 23223
                    </div>

                    <div class="contact-details-item email">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <a href="mailto:somebody@somewhere.com">somebody@somewhere.com</a>
                    </div>   

                    <div class="contact-details-item address">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        2 Marston Ave.
                    </div>                 
                </div>
                <sociallinks />
            </div>            
        </div>

        <div class="lower-footer">
            <div class="page-max">
                <div class="copyright">
                    &copy; {{ year}} {{ copyright }}
                </div>                                
            </div>
        </div>       
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear(),
            copyright: process.env.copyright,
            content: []
        }
    },

    async fetch() {
        this.content = await this.$content("global").fetch();                        
    },

}
</script>

<style scoped lang="scss">
    footer {        

        .upper-footer {
            @apply bg-gray-800;
            .page-max {
                @apply grid grid-cols-2 pt-8 pb-8;
                @apply md:flex md:justify-between md:items-center;                
            }

            .logo {
                @apply h-10;
            }   


            .contact-details {
                @apply order-3 col-span-full mt-4;
                @apply md:order-none text-white md:mt-0;                   
                
                .contact-details-item {
                    @apply p-1;
                    svg {
                        @apply inline-block h-6 w-6 ml-0;
                    }
                }
            }

            .social-links {
                @apply text-right;
            }
        }

        .lower-footer {      
            .page-max {
                @apply pt-3 pb-3;
            }   

            background-color: var(--clr-secondary);
            color: white;        
            @apply text-center;            
        }


        .page-max {  

        }

        svg {
            font-size: 30px;
            margin: 0 10px;
        }

        a {
            color: white;
        }
    }
</style>