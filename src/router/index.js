import Vue from 'vue';
import VueRouter from 'vue-router';

import createComponent from '@/hoc/index.js';

Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		redirect: '/ma/main',
	},
	{
		path: '/index.html',
		redirect: '/ma/main',
	},
	{
		path: '/ma',
		name: 'MainIndex',
		component: createComponent(
			() => import('@/layouts/header/MainAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/BaseFooter.vue'),
		),
		children: [
			{
				path: 'main',
				name: 'MainPage',
				component: () => import('@/views/ma/MainPage.vue'),
			},
		],
	},
	{
		path: '/mn',
		name: 'MenuIndex',
		component: createComponent(
			() => import('@/layouts/header/CateAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			() => import('@/layouts/footer/CateFooter.vue'),
		),
		children: [
			{
				path: 'menu',
				name: 'MenuPage',
				component: () => import('@/views/mn/MenuPage.vue'),
			},
		],
	},
	{
		path: '/sc',
		name: 'SearchIndex',
		component: createComponent(
			() => import('@/layouts/header/SearchAppbar.vue'),
			() => import('@/layouts/main/BaseView.vue'),
			//() => import('@/layouts/footer/CateFooter.vue'),
		),
		children: [
			{
				path: 'search',
				name: 'SearchWordPage',
				component: () => import('@/views/sc/SearchWordPage.vue'),
			},
		],
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
