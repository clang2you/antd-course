export default {
	singular: true,
	routes: [
		{
			path: '/',
			component: '../layout',
			routes: [ { path: 'helloworld', component: './HelloWorld' } ]
		}
	]
};
