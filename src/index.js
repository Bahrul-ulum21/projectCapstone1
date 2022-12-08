import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from './components/ContactApp';
import RukoApp from "./componentsDetailRuko/RukoApp";
import { BrowserRouter } from "react-router-dom";

// styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
// root.render(<ContactApp />);
// root.render(<RukoApp />);
root.render(
  <>
    <ContactApp/>
    <BrowserRouter>
      <RukoApp />
    </BrowserRouter>
  </>
);
