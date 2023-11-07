
import React, { StrictMode } from "react";
import {createRoot} from 'react-dom/client';

import './options.css';


const test = <img src="icon.png"/>


const root = document.createElement('div'); // create new html elment with div tag
const rootElement = document.body.appendChild(root); // append the child


// 👇️ if you use TypeScript, add non-null (!) assertion operator
const reactRoot = createRoot(rootElement!); 

reactRoot.render(
  <StrictMode>
    hello there from the options page
    {test}
  </StrictMode>,
);
