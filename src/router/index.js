import { createRouter, createWebHistory } from 'vue-router'
import VIfView from '../views/VifView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VBindKeyView from '../views/VBindKeyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/v-if' },
    { path: '/v-if', component: VIfView },
    { path: '/v-show', component: VShowView },
    { path: '/v-for', component: VForView },
    { path: '/v-bind-key', component: VBindKeyView }
  ]
})

export default router