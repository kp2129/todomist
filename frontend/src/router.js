import { createBrowserRouter } from 'react-router-dom';
import Login from '.components/pages/Login';
import Backlog from '.components/pages/backlog';
import Projects from '.components/pages/projects';
import NotFound from '.components/pages/NotFound';
import ProtectedLayout from './components/ProtectedLayout';
import GuestLayout from './components/GuestLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: '*', 
				element: <NotFound />,
			},
			
		],
	},
	{
		path: '/',
		element: <ProtectedLayout />,
		children: [
			{
				path: '/backlog',
				element: <Backlog />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '*', 
				element: <NotFound />,
			},
			
		],
	},
]);

export default router;