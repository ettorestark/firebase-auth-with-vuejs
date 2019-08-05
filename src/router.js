import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: () => import('./views/SignIn.vue')
		},
		{
			path: '/sign_up',
			component: () => import('./views/SignUp.vue')
		},
		{
			path: '/forgot',
			component: () => import('./views/Forgot.vue')
		},
		{
			path: '/dashboard',
			component: () => import('./views/Dashboard.vue'),
			meta: { auth: true }
		}
	]
});

router.beforeEach((to, from, next) => {
	let user = firebase.auth().currentUser;
	let auth = to.matched.some(record => record.meta.auth);
	if(auth && !user) {
		next('/');
	}else if(!auth && user) {
		next('/dashboard');
	}else {
		next();
	}
});

export default router;
