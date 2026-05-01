import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { setLocalStorage } from "./utils/LocalStorage"

// setLocalStorage() // ✅ MUST be here


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <App />
//    </AuthProvider>
        
    
  
//   </StrictMode>,
// )


// ✅ safer version: initialize only if not exists
if (!localStorage.getItem("employees")) {
  setLocalStorage();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

