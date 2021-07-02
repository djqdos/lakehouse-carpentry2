<template>
    <div class="maps-container">
        <div class="page-max">
            <h2 class="main-heading" v-if="block.heading">{{ block.heading }}</h2>
            <div class="mapsGrid">
                <div ref="map-root" class="map">
                    <client-only>
                    <l-map :zoom=13 :center="[block.maps.coordinates[1], block.maps.coordinates[0]]">
                         <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                         <l-marker :lat-lng="[block.maps.coordinates[1], block.maps.coordinates[0]]"></l-marker>
                    </l-map>
                    </client-only>
                </div>
                <div v-html="$md.render(block.text)" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'maps',
    props: {
        block: Object
    },

    created() {
        const mapData = JSON.parse(this.block.map);        
        this.block.maps = mapData
    },

    mounted() {
    }
}
</script>

<style scoped lang="scss">
    .mapsGrid {
        @apply grid grid-cols-1 gap-4;
        @apply md:grid-cols-2;
    }

    .map {
        z-index: 2;
        min-height: 300px;
    }
</style>
