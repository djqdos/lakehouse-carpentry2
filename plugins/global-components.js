import Vue from 'vue'

// Components
import hero from '../components/pagecomponents/hero.vue'
import spotlight from '../components/pagecomponents/spotlight.vue'
import bodytext from '../components/pagecomponents/bodytext.vue'
import splitleft from '../components/pagecomponents/splitleft.vue'
import splitright from '../components/pagecomponents/splitright.vue'
import imagegallery from '../components/pagecomponents/imagegallery.vue'
import contactblock from '../components/pagecomponents/contactblock.vue'
import fixedbackground from '../components/pagecomponents/fixedbackground.vue'
import sociallinks from '../components/sociallinks.vue'


const components = {
    hero,
    spotlight,
    bodytext,
    splitleft,
    splitright,
    imagegallery,
    contactblock,
    fixedbackground,

    sociallinks,
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component);
})