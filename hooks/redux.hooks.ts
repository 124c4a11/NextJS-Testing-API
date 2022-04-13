import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootReducer } from '../store';


export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector;
