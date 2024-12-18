import type { Component } from 'vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { layoutsMiddleware } from './middlewares';

declare module 'vue-router' {
	interface RouteMeta {
		layoutName?: string;
		layoutComponent?: Component;
		middleware?: Middleware | Middleware[];
	}
}

const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: () => import('../pages/Home.page.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (_, __, savedPosition) => {
		if (savedPosition) {
			return {
				...savedPosition,
				behavior: 'smooth',
			};
		}

		return {
			top: 0,
			behavior: 'smooth',
		};
	},
	globalMiddleware: [layoutsMiddleware],
});

export default router;
