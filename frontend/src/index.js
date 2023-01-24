import React from "react";
import App from "./app";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter  } from "react-router-dom";
import ReactDOM from "react-dom/client"

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
     <BrowserRouter>
       <App />
     </BrowserRouter>
    
  </React.StrictMode>
  
);


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )