import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sale from "@/view/sale";
import men from "@/view/men";
import women from "@/view/women";
import blog from "@/view/blog";
import contractus from "@/view/contractus";
import cart from "@/view/cart";
import Welcome from "@/view/Welcome";
import DetailView from "../components/DetailComponent/DetailView";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/men',
      name: 'men1',
      component: men
    },
    {
      path: '/women',
      name: 'women1',
      component: women
    },
    {
      path: '/blog',
      name: 'blog1',
      component: blog
    },
    {
      path: '/sale',
      name: 'sale1',
      component: sale
    },
    {
      path: '/cart',
      name: 'cart1',
      component: cart
    },
    {
      path: '/cu',
      name: 'cu',
      component: contractus
    },
  ]
})
