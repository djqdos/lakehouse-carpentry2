import { hero } from './components/hero.js'
import { bodytext } from './components/bodytext.js'
import { contact } from './components/contact.js'
import { fixedbackground } from './components/fixedbackground.js'
import { imagegallery } from './components/imagegallery.js'
import { openmaps } from './components/openmaps.js'
import { servicelist } from './components/servicelist.js'
import { spotlight } from './components/spotlight.js'
import { splitleft } from './components/splitleft.js'
import { splitright } from './components/splitright.js'
import { testimonials } from './components/testimonials.js'

import { metadata } from './components/metadata.js'

const config = {
    backend: {
        name: "proxy",
        proxy_url: "http://192.168.1.3:8081/api/v1"
    },
    media_folder: 'static/img',
    public_folder: '/img',

    collections: [{
        name: "pages",
        label: "Pages",
        format: "json",
        create: true,
        slug: "{{slug}}",
        folder: "content/pages",
        fields: [
            { label: "Title", name: "title", widget: "string", required: false },                    
            { 
                label: "Sections",
                name: "sections",
                widget: "list",
                types: [
                    hero,
                    fixedbackground,
                    bodytext,
                    spotlight,
                    splitleft,
                    splitright,
                    imagegallery,
                    servicelist,
                    testimonials,
                    contact,
                    openmaps
                ]
            }, 
            metadata,
            { label: "PageType", name: "pagetype", widget: 'hidden', default: 'content-page' },
            { label: "Show On Site", name: "showonsite", widget: "boolean", default: true, required: false }            
        ]
    }]
}


window.CMS_CONFIGURATION = config;

CMS.init({ config });