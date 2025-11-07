import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router'
import { ToastContainer, Flip, Slide } from 'react-toastify';
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ToastContainer */}
    <ToastContainer
      position="bottom-right"
      autoClose={500}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={false}
      rtl={false}
      draggable={true}
      draggablePercent={30}
      theme="dark"
      transition={Slide}
    />
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
