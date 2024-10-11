import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentManagement from './StudentManagement.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { persistor, store } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
            <ToastContainer/>
        </PersistGate>
        </Provider>
    </>
);
