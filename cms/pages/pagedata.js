import seo from '@/cms/components/seo'
import hero from '@/cms/components/hero'
import fixedbackground from '@/cms/components/fixedbackground'
import bodytext from '@/cms/components/bodytext'
import spotlight from '@/cms/components/spotlight'
import splitleft from '@/cms/components/splitleft'
import splitright from '@/cms/components/splitright'
import imagegallery from '@/cms/components/imagegallery'
import contactblock from '@/cms/components/contactblock'

const pages = {
    label: "Pages",
    name: "pages",
    create: true,
    slug: "{{slug}}",
    folder: "content/pages",
    fields: [
        {
            label: "Sections",
            name: "sections",
            widget: "list",
            fields: [
                    hero, 
                    bodytext, 
                    fixedbackground,                     
                    spotlight, 
                    splitleft, 
                    splitright, 
                    imagegallery,
                    contactblock
                ]
        },
        seo,
        {
            label: "PageType", name: "pagetype", widget: "hidden", default: "content-page"
        },
        {
            label: "Show on site", name: "showonsite", widget: "boolean", default: true, required: false 
        }
    ]
}

export default pages;