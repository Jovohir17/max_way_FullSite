import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartData = localStorage.getItem('cartItems');
        if (cartData) {
            setCartItems(JSON.parse(cartData));
        }
    }, []);

    const itemCount = cartItems.length;

    // Function to calculate the total price of items in the cart
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const totalCartPrice = calculateTotalPrice(); // Calculate the total price

    return (
        <>
            <header>
                <nav data-aos="fade-down" className='navbar'>
                    <a className="logo" href="/">
                        <img src="./imgs/header__logo.svg" alt="" />
                    </a>
                    <a className="burger__menu" href="/">
                        <img className="burger" src="./imgs/Frame.svg" alt="" />
                    </a>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className='nav-link'>Menyu</a></li>
                        <li className="nav-item"><a href="#" className='nav-link'>Bolalar uchun</a></li>
                        <li className="nav-item"><a href="#" className='nav-link'>Filiallar</a></li>
                    </ul>
                    <div className="nav__helps">
                        <div className="nav__call">
                            <img src="./imgs/call.svg" alt="" />
                            <a href="#"><span>(+99871)</span> <br/> 200-54-00</a>
                        </div>
                        <hr/>
                        <div className="nav__shop">
                            <img src="./imgs/shop.svg" alt="" />
                            <a className="basket" href="basket"><span>{itemCount}</span></a>
                            <a href="basket">
                                <p>
                                    Korzina <br />
                                    <span>{totalCartPrice} UZS</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="header__menu">
                    <div className="header__menu__info">
                        <h1 data-aos="fade-right">Siz izlagan mazzali ta’mlar</h1>
                        <p>When an unknown printer took a galley of type scrambled it to make a type specimen</p>
                        <div className="header__cards">
                            <div className="pizza__card"></div>
                            <div className="combo__card"></div>
                        </div>
                    </div>
                    <img data-aos="fade-left" src="./imgs/header__burger.png" alt="" />
                    <div className="container"></div>
                    <div className="card1" data-aos="fade-right">
                        <div className="border__text">
                            <img src="./imgs/firee.svg" alt="c"/>
                            <p>Yangi</p>
                            <h2>Pit <br/><span>-sa</span></h2>
                            <div className="Cointaier"></div>
                            <img className="fire__pizza" src="./imgs/fire__pizza.svg" alt=""/>
                        </div>
                    </div>
                    <div className="card2" data-aos="fade-left">
                        <div className="border__text2">
                            <img src="./imgs/cosmo.svg" alt="cosmo"/>
                            <p>Ko’p sotilgan</p>
                            <h2>ㅤKom <br/><span>-BO</span></h2>
                            <img className="fire__kombo" src="./imgs/max.png" alt="kombo"/>
                        </div>
                    </div>
                </div>
                <hr/>
            </header>
        </>
    )
}
