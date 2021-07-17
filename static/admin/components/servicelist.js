import { hero } from '../components/hero.js'
import { bodytext } from '../components/bodytext.js'
import { contact } from '../components/contact.js'
import { fixedbackground } from '../components/fixedbackground.js'
import { imagegallery } from '../components/imagegallery.js'
import { openmaps } from '../components/openmaps.js'
import { spotlight } from '../components/spotlight.js'
import { splitleft } from '../components/splitleft.js'
import { splitright } from '../components/splitright.js'
import { testimonials } from '../components/testimonials.js'

export const servicelist = {
    name: "servicelist",
    label: "Service List", 
    widget: "object",
    fields: [
        { label: "Heading", name: "heading", widget: "string" },
        { label: "List Style", name: "liststyle", widget: "select", 
          options: [
              { label: "Left", value: "service-list-left" },
              { label: "Top", value: "service-list-top" }
          ],
          default: [
              { label: "Left", value: "service-list-left" }
          ]
        },
        { 
            label: "Service List",
            name: "servicelist",
            widget: "list",
            fields: [                
                { label: "Service Name", name: "servicename", widget: "string" },
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
                        testimonials,
                        contact,
                        openmaps 
                    ]
                }           
            ]
        }
    ]
}