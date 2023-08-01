import React, {Component} from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Pitsa from "./pages/Pitsa";
import Burger from "./pages/Burger";
import Kombo from "./pages/Kombo";
import Ichimliklar from "./pages/Ichimliklar";
import Eror404 from "./pages/Eror404";
import "./Components/style/main.css"
import Basket from "./pages/Basket";


class App extends Component {
    render() {

        return (
            <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Pitsa" element={<Pitsa/>}/>
                    <Route path="/Burger" element={<Burger/>}/>
                    <Route path="/Kombo" element={<Kombo/>}/>
                    <Route path="/Ichimliklar" element={<Ichimliklar/>}/>
                    <Route path="/Basket" element={<Basket/>}/>
                    <Route path="*" element={<Eror404/>}/>
                </Routes>



            </>
        );
    }
}

export default App;