import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OyuncuBilgisayar from "./OyuncuBilgisayar";
import OyuncuOyuncu from "./OyuncuOyuncu";
import {CreateBilgisayar} from "./CreateBilgisayar";
import {Create} from "./Create";
import {Col, Container, Row, ThemeProvider} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';




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
                <Route path={"/OyuncuBilgisayar"} element={<OyuncuBilgisayar/>} />
                <Route path={"/OyuncuOyuncu"} element={<OyuncuOyuncu/>} />
                <Route path={"/create"} element={<Create/>} />
                <Route path={"/createBilgisayar"} element={<CreateBilgisayar/>} />
                <Route path={"*"} element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <App/>
    </React.StrictMode>
);
reportWebVitals();
 //ReactDOM.render(document.getElementById('root'));



