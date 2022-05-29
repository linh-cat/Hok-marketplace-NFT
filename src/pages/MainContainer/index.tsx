import React, { Suspense } from 'react';
import { Layout } from 'antd';
import HeaderComponent from 'components/Header';
import FooterComponent from 'components/Footer';
import FilterComponent from 'components/Filter';

import { Switch, Route } from 'react-router-dom';

import SpinHok from 'components/SpinHok';

const { Header, Footer, Sider, Content } = Layout;

type Props = {
	routes: any;
};

const index = ({ routes }: Props) => {
	return (
		<Layout>
			<Header>
				<HeaderComponent />
			</Header>
			<Layout>
				<Sider>
					<FilterComponent />
				</Sider>
				<Content>
					<Suspense fallback={<SpinHok />}>
						<Switch>
							{routes.map((item: any, idx: any) => (
								<Route key={idx} exact={item.exact} path={item.path} component={item.component} />
							))}
						</Switch>
					</Suspense>
				</Content>
			</Layout>
			<Footer>
				<FooterComponent />
			</Footer>
		</Layout>
	);
};

export default index;
