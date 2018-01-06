import Main from './../components/Main.vue'
import Regulation from './../components/regulation/Regulation.vue'

export const routes = [
    { 
        path: '/', 
        component: Main,
        name: 'home',
        children: [
            { path: '/regulation', component: Regulation, name: 'regulation'}
        ]
    }
]