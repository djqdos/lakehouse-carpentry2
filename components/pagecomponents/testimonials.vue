<template>
    <div class="testimonials-container">
        <div class="page-max">
            <h2 class="heading">{{ block.heading }}</h2>

            <div class="testimonials">
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
    .testimonials-container {
        background-color: $light-grey;
    }


    .testimonials {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;        
        
    }

    .testimonial-item {        
        display: grid;
        grid-template-columns: 1fr 2fr;
        background-color: white;
        img {            
        }

        .testimonial-item__details {
            padding: 1em;            

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
                font-style: italic;
                text-align: right;
                color: $accent-color;
                &::before {
                    content: "- ";
                }
            }
        }
    }
</style>
