<template>
    <div class="page-max">
        <div class="split-left">
            <div v-html="$md.render(block.text)" class="split-left__text"></div>
            <img :src="block.image" alt="" class="split-left__image" />
        </div>
    </div>
</template>

<script>
export default {    
    name: "splitleft",
    props: {
        block: Object
    },
}
</script>

<style scoped lang="scss">
    .split-left {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;        
        margin-top: 1em; 

        .split-left__text {
            border-left: $border-width solid $accent-color;
            padding: 1em;
            background-color: #efefef;            
        }

        .split-left__image {
            width: 100%;
        }
    }


    @media screen and (max-width: 768px) { 
        .split-left {    
            grid-template-columns: 1fr;                              
            .split-left__image{ 
                order: 1;
            }

            .split-left__text {
                order: 2;
            }
        }        
    }
</style>