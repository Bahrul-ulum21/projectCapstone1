import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import ContactApp from './components/ContactApp';
// import RukoApp from './componentsDetailRuko/RukoApp';
import App from './app';
// import FaqApp from './componentsfaq/FaqApp';



// styling
import './styles/style.css';

// root.render(<App />);
// root.render(<ContactApp />);
// root.render(<RukoApp />);
const root = createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
    <App />

  </BrowserRouter>

</>)