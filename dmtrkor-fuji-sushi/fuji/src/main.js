import {createApp, h} from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './Router/index'
import './assets/main.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})




createApp(App).use(vuetify).use(router).mount('#app')
