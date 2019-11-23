import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import About from './components/About.vue';
import History from './components/History.vue';
import Contact from './components/Contact.vue';
import Delivery from './components/Delivery.vue';
import Admin from './components/Admin.vue';
import OrderingGuide from  './components/OrderingGuide.vue';

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
      path: '/menu',
      component: Menu,
      name: 'menu'
    },
    {
      path: '/admin',
      component: Admin,
      name: 'admin',
      beforeEnter: (to, from, next) => {
       // alert('This area is restrictred, please login to continue...');
        next();
      },
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