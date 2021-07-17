<template>
    <section class="bodytext-container">
        <div class="page-max">
            <div class="body-text" v-html="$md.render(block.bodytext)"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "bodytext",
    props: {
        block: Object
    },
}
</script>

<style scoped lang="scss">
    .body-text {  
        border-left: $border-width solid $accent-color;
        padding: 1em;
        background-color: $light-grey;
    }
</style>
