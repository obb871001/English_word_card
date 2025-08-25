import { useDispatch, useSelector } from 'react-redux';

// 自訂 hooks 以便更好的類型支援
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
