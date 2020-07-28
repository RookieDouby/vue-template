import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "Layout" */ '@/components/Layout'),
            meta: {
                title: '首页',
            },
            children: [
                {
                    path: '/home',
                    component: () => import (/* webpackChunkName: "home" */ '@/pages/home/Home.vue'),
                },
                {
                    path: '/bpmn',
                    component: () => import (/* webpackChunkName: "bpmn" */ '@/pages/bpmn/index.vue'),
                },
                {
                    path: '/getBpmnFromHttp',
                    name: 'getBpmnFromHttp',
                    component: () => import (/* webpackChunkName: "bpmn" */ '@/pages/bpmn/getBpmnFromHttp.vue'),
                },
            ]
        }
    ]
})

export default router;

