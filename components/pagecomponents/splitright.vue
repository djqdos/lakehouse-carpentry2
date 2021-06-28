<template>
    <div class="split-right page-max">
        <img :src="block.image" alt="" class="split-right__image" />
        <div v-html="$md.render(block.text)" class="split-right__text"></div>        
    </div>
</template>

<script>
export default {    
    name: "splitright",
    props: {
        block: Object
    },
}
</script>

<style scoped lang="scss">
    .split-right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;        
        margin-top: 1em;             
        .split-right__image {
            width: 100%;
        }
    }


    @media screen and (max-width: 768px) { 
        .split-right {    
            grid-template-columns: 1fr;     

            .split-right__image{ 
                order: 1;
            }

            .split-right__text {
                order: 2;
            }
        }        
    }
</style>