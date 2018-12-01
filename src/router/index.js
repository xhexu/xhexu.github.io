import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/views/Index'
import Edit from '@/views/edit/Edit'
import Read from '@/views/read/Read'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home,
    }, {
        path: '/edit',
        name: 'Edit',
        component: Edit,
    }, {
        path: '/read',
        name: 'Read',
        component: Read
    }]
})