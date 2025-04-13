import { store } from "@/app/store/appStore";
import { useDispatch } from "react-redux";

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
