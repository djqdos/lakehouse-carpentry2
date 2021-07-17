import { hero } from '../components/hero.js'
import { bodytext } from '../components/bodytext.js'
import { contact } from '../components/contact.js'
import { fixedbackground } from '../components/fixedbackground.js'
import { imagegallery } from '../components/imagegallery.js'
import { openmaps } from '../components/openmaps.js'
import { servicelist } from '../components/servicelist.js'
import { spotlight } from '../components/spotlight.js'
import { splitleft } from '../components/splitleft.js'
import { splitright } from '../components/splitright.js'
import { testimonials } from '../components/testimonials.js'

export const tabbed = {
    label: "Tabbed",
    name: "tabbed",
    widget: "list",
    fields: [
        { 
            label: "Tab", name: "tab", widget: "list",
            fields: [
                { label: "Tab", name: "tab", widget: "string" },
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
                }
        
            ]
        },        
    ]
}