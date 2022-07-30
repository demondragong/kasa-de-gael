import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './routes/About'
import Error from './routes/Error'
import Logement from './routes/Logement';
import Gallery from './components/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Gallery />}></Route>
        <Route path="logement-:logementId" element={<Logement />} />
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>  
    </Routes>
  </BrowserRouter>
);