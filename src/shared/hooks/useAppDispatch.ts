import { store } from '@/app/appStore';
import { useDispatch } from 'react-redux';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
