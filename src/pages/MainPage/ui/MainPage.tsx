import { ROUTES } from '@/shared/config/router/routes';
import { Navigate } from 'react-router-dom';

const MainPage = () => {
  return <Navigate to={ROUTES.quiz.create} />;
};

export default MainPage;
