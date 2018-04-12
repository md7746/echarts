import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Pie from '@/components/Pie'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},{
			path: '/pie',
			name: 'Pie',
			component: Pie
		}, {
			path: "*",
			redirect: {
				path: '/'
			}
		}
	]
})