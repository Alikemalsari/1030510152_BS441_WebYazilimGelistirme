import React from "react";
import {Link} from "react-router-dom";
import gif from "./giphy.gif"
import "./App.css"


const Home=()=>{
    return  <div>
        
       <h1 className={"center"}>TAŞ-KAĞIT-MAKAS OYUNU</h1>
        <div className="center">
                <img  src={gif} style={{height:'320px',width:'560px'}}/>
            </div>
        <h2 className="center">
            TAŞ-KAĞIT-MAKAS OYUNUNA HOŞ GELDİNİZ. AŞAĞIDAKİ BUTONLARDAN SİZE UYGUN OLANINA TIKLAYARAK OYUNA ULAŞABİLİRSİNİZ</h2>
           
        <div className="action">
            <Link to={"/create"} className="button">Oyuncu VS Oyuncu</Link>
            <Link to={"/createBilgisayar"} className="button">Oyuncu VS Bilgisayar</Link>

        </div>
    </div>
}
export default Home;
