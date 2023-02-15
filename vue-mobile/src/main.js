import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import {
    Button,
    Uploader
} from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Uploader)

let router = null
let instance = null

function render(props = {}) {
    const {
        container,
        request
    } = props
    if (request) {
        Object.keys(request).forEach(key => {
            Vue.prototype['$' + key] = request[key]
        })
    }
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
        mode: 'history',
        routes,
    })
    instance = new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

function storeTest(props) {
    props.onGlobalStateChange && props.onGlobalStateChange(
        (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
        true,
    )
    props.setGlobalState && props.setGlobalState({
        ignore: props.name,
        user: {
            name: props.name,
        },
    })
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
    console.log('[vue] props from main framework', props)
    storeTest(props)
    render(props)
}

export async function unmount() {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
    router = null
}