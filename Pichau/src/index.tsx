// COMPONENTS 
import { AppRoutes } from './routes';

// STYLE
import './index.scss';
import 'normalize.css';

// EXTERNAL
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <StrictMode>

      <AppRoutes />
      
    </StrictMode>
  );
}

// create root element
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// render the app
root.render(<App />);
