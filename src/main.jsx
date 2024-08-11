import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import HeaderProvider from './Context/HeaderContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </StrictMode>
);
