import CMS from 'netlify-cms-app'

import pages from '@/cms/pages/pagedata'
import settings from '@/cms/pages/settings'
import staticpages from '@/cms/pages/staticpages'

window.CMS_MANUAL_INIT = true

CMS.init({
    config: {
        load_config_file: false,
        backend: {
            name: "proxy",
            proxy_url: "http://192.168.1.3:8081/api/v1"
        },
        media_folder: "/static/img",
        public_folder: "/img",

        collections: [settings, pages, staticpages]
    }
})