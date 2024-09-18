import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import USA from '../pages/countries/USA.vue'
import Australia from '../pages/countries/Australia.vue'
import Contact from '../pages/Contact.vue'
import Privacy from '../pages/Privacy.vue'
import Terms from '../pages/Terms.vue'
import Cookies from '../pages/Cookies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {title: "Home"}
    },
    {
      path: '/united-states',
      name: 'USA',
      component: USA,
      meta: {title: "USA"}
    },
    {
      path: '/australia',
      name: 'Australia',
      component: Australia,
      meta: {title: "Australia"}
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {title: "Contact"}
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
      meta: {title: "Privacy Policy"}
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
      meta: {title: "Terms"}
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: Cookies,
      meta: {title: "Cookies"}
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Discover Australia';
  document.title = to.meta.title || defaultTitle;
  next();
})

export default router
