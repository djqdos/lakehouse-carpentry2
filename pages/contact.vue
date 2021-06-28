<template>
    <main>        
        <hero :block="content.hero" />
        
        <template v-for="section in content.sections">
            <component v-intersection :is="section.type" :block="section" :key="section.type"></component>
        </template>        
    </main>
</template>

<script>
import metadataMixin from '@/mixins/metadata'

export default {
    mixins: [metadataMixin],

    name: "Contact",
    async asyncData({ $content }) {
        let content = await $content("contact").fetch();

        return {
            content
        }
    },
}
</script>

<style scoped lang="scss">
    .contactus {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1em;

        form {
            display: grid;            
            gap: .5em;
            grid-template-areas: "name message"
                                 "email message"
                                 "tel message"
                                 "submit submit"
        }

        input, textarea {
            padding: 1em;
            width: 100%;
            height: 100%;
            position: relative;
        }

        textarea {
            height: 100%;
        }

        fieldset.name { grid-area: name; }
        fieldset.email { grid-area: email; }
        fieldset.tel { grid-area: tel; }
        fieldset.message { grid-area: message; }
        fieldset.submit { grid-area: submit; place-items: center; }

        fieldset {
            border: 0;
        }

        input[type="submit"] {
            display: block;
            width: auto;
        }
    }

    @media screen and (max-width: 768px) { 
        .contactus {
            grid-template-columns: 1fr;            

            form {
                display: block;                
            }

            input, label {
                display: block;
                width: 100%;
            }

            input {
                padding: 1em;
                margin-bottom: 1em;
            }

            textarea {
                width: 100%;
                padding: 1em;
            }
        }
    }
</style>