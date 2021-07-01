<template>
    <div class="testimonials-container bg-gray-100">
        <div class="page-max">
            <h2 class="main-heading">{{ block.heading }}</h2>

            <div class="testimonialsGrid">
                <div v-for="(testimonial, index) in block.testimonials" 
                     :key="index"
                     class="testimonial-item">
                    <img :src="testimonial.image" v-if="testimonial.image" :alt="testimonial.author" />
                    <div class="testimonial-item__details">
                        <p class="quote"> {{ testimonial.text }}</p>
                        <p class="author">{{ testimonial.author }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "testimonials",
    props: {
        block: Object
    }
}
</script>

<style scoped lang="scss">
    .testimonialsGrid {
        @apply grid grid-cols-1 gap-4;
        @apply md:grid-cols-2;

    }

    .testimonial-item {    
        @apply grid grid-cols-1 gap-4;
        @apply lg:grid-cols-2;

        p.quote {
                &::before {
                    content: open-quote;
                    color: $accent-color;
                }

                &::after {
                    content: close-quote;
                    color: $accent-color;
                }
            }
        p.author {
            @apply text-left text-accent;

            &::before {
                content: "- ";
            }
        }
    }


    // .testimonials-container {
    //     background-color: $light-grey;
    // }


    // .testimonials {
    //     display: grid;
    //     grid-template-columns: repeat(2, 1fr);
    //     gap: 1em;        
        
    // }

    // .testimonial-item {        
    //     display: grid;
    //     grid-template-columns: 1fr 2fr;
    //     background-color: white;
    //     img {            
    //     }

    //     .testimonial-item__details {
    //         padding: 1em;            

            

            // p.author {
            //     font-style: italic;
            //     text-align: right;
            //     color: $accent-color;
            //     &::before {
            //         content: "- ";
            //     }
            // }
    //     }
    // }
</style>
