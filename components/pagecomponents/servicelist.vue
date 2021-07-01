<template>
    <div class="service-list-container">
        <div class="page-max">
            <h2 class="main-heading" v-if="block.heading">{{ block.heading }}</h2>

            <div class="service-list" v-if="block.servicelist">                
                <div class="service-link">
                    <a v-for="(link, index) in block.servicelist" 
                       :key="index" 
                       @click="showService(index, $event)"                       
                       >
                        {{ link.servicename}}
                    </a>
                </div>

                <div class="service-content md:col-span-9 cms-header" v-html="$md.render(block.servicelist[0].text)">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "servicelist",
    props: {
        block: Object
    },
    data() {
        return {
            selectedItem: {}
        }
    },
    mounted() {
        // if(this.block.servicelist) {
        //     const servicedetail = document.querySelector(".service-content");            
        //     this.selectedItem = this.block.servicelist[0];   
        //     servicedetail.innerHTML = this.$md.render(this.selectedItem.text);
        // }
    },
    methods: {
        showService: function(index, event) {            
            this.selectedItem = this.block.servicelist[index];  
            const item = this.selectedItem;            
            const servicedetail = document.querySelector(".service-content");
            const md = this.$md;

            const tl = this.$anime.timeline({
                easing: 'easeOutExpo',
                duration: 500
            });

            tl.add({
                targets: '.service-content',
                opacity: 0,
                complete: function() {
                    servicedetail.innerHTML = md.render(item.text);
                }
            });

            tl.add({
                targets: '.service-content',
                opacity: 1,
            });
        }
    }
}
</script>

<style scoped lang="scss">



    .service-list {
        @apply grid grid-cols-1 gap-4 md:grid-cols-12 ;
    }

    .service-link {
        @apply md:col-span-3;

        a {
            @apply inline-block p-2 mr-2 mb-2 border border-accent;
            @apply md:block md:p-4 md:border md:mb-4 md:border-accent;
            
            cursor: pointer;

            &:hover {
                @apply bg-accent text-white;
            }
        }
    }
</style>