<template>
    <section class="splitleft-container">        
        <div class="page-max">
            <div class="splitleft">                
                <div v-html="$md.render(block.text)" 
                     class="order-1 border-l-4 p-4 pt-0 cms-header border-accent bg-gray-100" >
                </div>
                <img :src="block.image" alt="" class="order-2 w-full h-full object-cover" />
            </div>
        </div>
    </section>
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
    .splitleft {
        @apply grid grid-cols-1 gap-4 md:grid-cols-2;
    }
</style>