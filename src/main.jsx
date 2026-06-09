import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App.jsx';
import './styles/global.css';

export const createRoot = ViteReactSSG({ routes });
