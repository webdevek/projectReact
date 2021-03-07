import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // подключение библиотеки
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from '../src/Components/app/app';
// import AppHeader from "./Components/app-header/app-header";


ReactDOM.render(<App/>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
