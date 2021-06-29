<template>
    <footer>
        <div class="page-max">
            <div class="copyright">
                &copy; {{ year}} {{ copyright }}
            </div>

            <div class="middle1">
                
            </div>

            <div class="middle2">
                
            </div>

            <sociallinks />
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear(),
            copyright: process.env.copyright,
            content: []
        }
    },

    async fetch() {
        this.content = await this.$content("global").fetch();                        
    },

}
</script>

<style scoped lang="scss">
    footer {        
        grid-area: footer;        
        
        background-color: var(--clr-secondary);
        color: white;        
        padding-top: 1em;
        padding-bottom: 1em;        

        .page-max {  
            padding: 0;          
            display: grid;
            align-items: center;
            gap: 1em;
            grid-template-columns: repeat(4, 1fr);
            place-items: center;
        }

        svg {
            font-size: 30px;
            margin: 0 10px;
        }

        a {
            color: white;
        }
    }
</style>