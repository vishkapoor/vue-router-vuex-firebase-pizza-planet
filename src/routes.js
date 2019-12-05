import Home from './components/Home.vue';

const Menu = () => import('./components/Menu.vue');

const About = () => import(/* webpackChunkName: "footerGroup" */ './components/About.vue');
const Admin = () => import(/* webpackChunkName: "footerGroup" */ './components/Admin.vue');

import History from './components/History.vue';
import Contact from './components/Contact.vue';
import Delivery from './components/Delivery.vue';
import Login from './components/Login.vue';
const OrderingGuide = () => import('./components/OrderingGuide.vue');

export const routes = [
    {
      path: '/',
      name: 'home' ,
      components: {
        default: Home,
        'ordering-guide': OrderingGuide,
        history: History,
        delivery: Delivery
      },
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/menu',
      component: Menu,
      name: 'menu'
    },
    {
      path: '/admin',
      component: Admin,
      name: 'admin',
    },
    {
      path: '/about',
      component: About,
      name: 'about',
      children: [{
          path: '/contact',
          component: Contact,
          name: 'contact'
        },
        {
          path: '/history',
          component: History,
          name: 'history'
        },
        {
          path: '/delivery',
          component: Delivery,
          name: 'delivery'
        }
    ]},
    {
      path: '*',
      redirect: '/'
    }
];