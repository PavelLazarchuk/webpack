import React, { lazy, Suspense } from 'react';

import './css/style.css';
import Preloader from 'shared/Preloader';
const DefaultLayout = lazy(() => import('./containers'));

const App = () => (
	<Suspense fallback={<Preloader />}>
		<DefaultLayout />
	</Suspense>
);

export default App;
