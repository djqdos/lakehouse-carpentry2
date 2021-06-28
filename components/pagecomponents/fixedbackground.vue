<template>
    <div class="fixedbg" :style="{ backgroundImage :`url(${block.backgroundimage})` }">
        <div class="page-max">
            <div class="bodytext" 
                 v-html="$md.render(block.bodytext)" 
                 :style="{ color: block.textcolor }"
                 />
        </div>
    </div>    
</template>

<script>
export default {
    name: "fixedbackground",
    props: {
        block: Object
    }
}
</script>

<style scoped lang="scss">
    .fixedbg {
        background-size: cover;
        background-attachment: fixed;
        min-height: 20em;
    }

    .page-max {
        text-align: center;
        min-height: 20em;
    }

    .bodytext {
        display: grid;
        place-content: center;
        padding: 2em;
        min-height: 20em;
        text-shadow: 2px 2px 2px rgba(0,0,0,0.4);
    }
</style>
