export default {
    head() {
        const metadata = this.getMetadata();
        return {
            title: this.content.metadata?.seo?.title || this.content.title, 
            description: this.content.metadata?.seo?.description || this.content.title,
            meta:  
            [
                ...metadata,
                { hid: 'og:type', name: 'og:type', content: "website"},
                { hid: 'og:url', name: 'og:url', content: process.env.base_url + this.$route.fullPath },                
                { hid: 'twitter:url', name: 'twitter:url', content: process.env.base_url + this.$route.fullPath },                
            ]
        }
    },

    methods: {
        getMetadata: function() {
            const metadata = [];
            if(this.content.metadata?.seo?.title) {
                metadata.push({ hid: 'title', name: 'title', content: this.content.metadata.seo.title });
                metadata.push({ hid: 'og:title', name: 'og:title', content: this.content.metadata.seo.title });
                metadata.push({ hid: 'twitter:title', name: 'twitter:title', content: this.content.metadata.seo.title });
            }

            if(this.content.metadata?.seo?.description) {
                metadata.push({ hid: 'og:description', name: 'og:description', content: this.content.metadata.seo.description });
                metadata.push({ hid: 'twitter:description', name: 'twitter:description', content: this.content.metadata.seo.description });            
            }

            if(this.content.metadata?.seo?.image) {
                metadata.push({ hid: 'og:image', name: 'og:image', content: this.content.metadata.seo.image });
                metadata.push({ hid: 'twitter:image', name: 'twitter:image', content: this.content.metadata.seo.image });
            }

            if(this.content.metadata?.seo?.imagealt) {
                metadata.push({ hid: 'og:image:alt', name: 'og:image:alt', content: this.content.metadata.seo.imagealt });
                metadata.push({ hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.content.metadata.seo.imagealt });
            }            
            return metadata;
        }
    }

};