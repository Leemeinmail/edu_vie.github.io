import { createRouter, createWebHistory } from 'vue-router';

let home = () => import('@/views/Home.vue');
let notFound = () => import('@/views/NotFound.vue');
let blogList = () => import('@/views/BlogList.vue');
let blogDetail = () => import('@/views/BlogDetail.vue');
let contacts = () => import('@/views/Contacts.vue');
let others = () => import('@/views/Others.vue');
let InteractiveTablePage = () => import('@/views/InteractiveTablePage.vue');

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/blog-list/', name: 'blogList', component: blogList },
    { path: '/blog-list/:id/', name: 'blogListPages', component: blogList },
    { path: '/blog-detail/:post/', name: 'blogDetail', component: blogDetail },
    { path: '/contacts/', name: 'contacts', component: contacts },
    { path: '/others/', name: 'others', component: others },
    { path: '/interactiv-table/', name: 'InteractiveTablePage', component: InteractiveTablePage },
    { path: '/:catchAll(.*)', name: 'notFound', component: notFound }
]

const router = createRouter({
    history: createWebHistory( process.env.BASE_URL ),
    routes
})

export default router
