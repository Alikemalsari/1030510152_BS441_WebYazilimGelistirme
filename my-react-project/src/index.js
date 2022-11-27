import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import OyuncuBilgisayar from "./OyuncuBilgisayar";
import OyuncuOyuncu from "./OyuncuOyuncu";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const NotFound=()=>{
    return(
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız sayfaya şu anda ulaşılamıyor.
                Lütfen daha sonra tekrar deneyiniz.
            </p>
        </div>

    )
}

const App=()=>{
  return(
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/OyuncuBilgisayar"} element={<OyuncuBilgisayar/>} />
              <Route path={"/OyuncuOyuncu"} element={<OyuncuOyuncu/>} />
              <Route path={"*"} element={<NotFound/>} />
              
          </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
