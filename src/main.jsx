import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './08-useContext/MainApp';
//import { Memorize } from './06-Memorize/Memorize';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import {CounterWithCustomHook} from '../src/01-useState/CounterWithCustomHook'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <MainApp />
  </BrowserRouter>
)
