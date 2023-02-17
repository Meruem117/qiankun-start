import {
    registerMicroApps,
    setDefaultMountApp,
    start
} from 'qiankun'
import request from './utils/request'
import './index.less'

import render from './render/VueRender'

render({
    loading: true
})

const loader = (loading) => render({
    loading
})

registerMicroApps(
    [{
        name: 'vue',
        entry: '//localhost:8001',
        container: '#subapp-viewport',
        loader,
        activeRule: '/vue',
        props: {
            request
        }
    }], {
        beforeLoad: [
            (app) => {
                console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
            },
        ],
        beforeMount: [
            (app) => {
                console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
            },
        ],
        afterUnmount: [
            (app) => {
                console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
            },
        ],
    }
)

setDefaultMountApp('/vue')

start()