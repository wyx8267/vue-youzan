import Vue from 'vue'
import Router from 'vue-router'
import Member from './components/member.vue'
import Address from './components/address.vue'
import All from './components/all.vue'
import Form from './components/form.vue'

Vue.use(Router)
const routes = [
    {
        path: '/',
        component: Member
    },
    {
        path: '/address',
        component: Address,
        children: [
            {
                path: '',
                redirect: 'all'
            },
            {
                path: 'all',
                name: 'all',
                component: All
            },
            {
                path: 'form',
                name: 'form',
                component: Form
            }
        ]
    }
]
const router = new Router({
    routes
})

new Vue({
    el: '#app',
    router
})