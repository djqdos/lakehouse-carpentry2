<template>
    <section class="splitright-container">
        <div class="page-max">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <img :src="block.image" alt="" class="split-right__image w-full h-full object-cover" />
                <div v-html="$md.render(block.text)"
                     class="sm:order-2 border-r-8 p-4 pt-0 cms-header border-accent bg-gray-100 "></div>        
            </div>
        </div>
    </section>
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


</style>