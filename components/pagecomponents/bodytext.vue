<template>
    <div class="body-text page-max" v-html="$md.render(block.bodytext)"></div>
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
        margin-top: 2em;
        padding-bottom: 2em;
    }
</style>
