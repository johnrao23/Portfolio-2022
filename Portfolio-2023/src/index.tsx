import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App is the default export from App.tsx
import Main from './3d/Main.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const pathname = window.location.pathname;
if (pathname.startsWith('/static')) {
  // Render the React application
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  // Render the Three.js application
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>,
  );
}
