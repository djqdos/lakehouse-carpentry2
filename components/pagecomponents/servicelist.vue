<template>
    <div class="service-list-container">
        <div class="page-max">
            <h2 v-if="block.heading" class="heading">{{ block.heading }}</h2>
            <div class="service-list" v-if="block.servicelist">                
                <div class="service-link">
                    <a v-for="(link, index) in block.servicelist" :key="index" @click="showService(index, $event)">
                        {{ link.servicename}}
                    </a>
                </div>

                <div class="service-content" v-html="$md.render(block.servicelist[0].text)">

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
        display: grid;
        grid-template-columns: 1fr 4fr;
        gap: 1em;
    }

    .service-link {
        a {
            display: block;
            border: 1px solid $accent-color;
            padding: 1em;            
            margin-bottom: 1em;
            cursor: pointer;

            transform: background 300ms;

            &:first-child {
                margin-top: 0;
            }

            &:hover {
                background-color: $accent-color;
                color: white;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .service-list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1em;
        }

        .service-link {            
            margin: 0;
            a {
                display: inline-block;
                margin: .2em;
            }
        }
    }

</style>