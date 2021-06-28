import Vue from 'vue'

import metadataMixin from '@/mixins/metadata.js'

Vue.config.productionTip = false;
Vue.mixin(metadataMixin);
// const mixins = {
//     metadataMixin
// }

// Object.entries(mixins).forEach(mixin => {
//     Vue.mixin(mixin);
// });