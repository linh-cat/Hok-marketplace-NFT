import React from 'react';
import MainContainer from 'pages/MainContainer';

const appRoutes = [
	{
		exact: false,
		path: '/',
		component: MainContainer,
		routes: [
			{
				exact: true,
				path: '/',
				component: React.lazy(() => import('components/MainContent')),
			},
			{
				exact: true,
				path: '/new',
				component: React.lazy(() => import('pages/MainContainer/New')),
			},
			{
				exact: true,
				path: '/mynft',
				component: React.lazy(() => import('pages/MainContainer/MyNFT')),
			},
			{
				exact: true,
				path: '/description/:idParams',
				component: React.lazy(() => import('pages/MainContainer/Description')),
			},
			{
				exact: true,
				path: '/mydescription/:idParams',
				component: React.lazy(() => import('pages/MainContainer/MyDescription')),
			},
		],
	},
];
export default appRoutes;
