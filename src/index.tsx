import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/main.scss"
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* Router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
