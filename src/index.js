import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Filterpage from './Components/Filterpage';
import Detailspage from './Components/Detailspage';
import Homepage from './Components/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <Homepage/>
  <Filterpage/>
  <Detailspage/>
 </div>
);