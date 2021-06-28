<template>
    <div>
        <img :src="block.selected" />
    </div>
</template>

<script>
export default {
    name: "imagegallery_modal",
    props: {
        block:Object,
    }
}
</script>

<style scoped lang="scss">
</style>
