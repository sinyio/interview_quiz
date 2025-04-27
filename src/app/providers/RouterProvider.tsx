import { RouterProvider as Router } from 'react-router-dom';
import { router } from '../AppRouter';

export const RouterProvider = () => {
	return <Router router={router} />;
};
