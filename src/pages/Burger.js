import React, {Component} from 'react';
import {StyledCard} from "../Components/CardStyle/Card Style";

class Burger extends Component {

    handleAddToCart = (name, price, imageSrc) => {
        const item = {name, price, imageSrc};
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    render() {

        return (
            <>
                <div className="card__pizza">
                    <h1 data-aos="fade-right" className="Pitsa__h1"><span>Burger</span></h1>

                    <div className="dd-flex">
                        <StyledCard>
                            <div className="card__1" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/Burger1.png" alt="#"/>
                                    <div className="fire__backround">
                                        <img className="imgg" src="./imgs/firee.svg" alt=""/>
                                    </div>
                                    <div className="card__about">
                                        <h2 className="pizza_name">Cheeseburger <img className="pizza_sticker" src="./imgs/sir.svg" alt="sir"/></h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">23,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Cheeseburger', 23000, './imgs/Burger1.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>
                        <StyledCard>
                            <div className="card__2" data-aos="fade-left">
                                <div className="card__df">

                                    <img className="pizza" src="./imgs/Burger1.png" alt="#"/>

                                    {/*Top Burger*/}
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}

                                    <div className="card__about">
                                        <h2 className="pizza_name">Chili burger <img className="pizza_sticker" src="./imgs/Chili.svg" alt="sir"/></h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">23,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Chili burger', 23000, './imgs/Burger1.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                    </div>
                    <div className="dd-flex">
                        <StyledCard>
                            <div className="card__1" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/Burger1.png" alt="#"/>
                                    <div className="fire__backround">
                                        <img className="imgg" src="./imgs/firee.svg" alt=""/>
                                    </div>
                                    <div className="card__about">
                                        <h2 className="pizza_name">Hamburger
                                            {/*<img className="pizza_sticker" src="./imgs/sir.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">23,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Hamburger', 23000, './imgs/Burger1.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>
                        <StyledCard>
                            <div className="card__2" data-aos="fade-left">
                                <div className="card__df">

                                    <img className="pizza" src="./imgs/Burger1.png" alt="#"/>

                                    {/*Top Burger*/}
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}

                                    <div className="card__about">
                                        <h2 className="pizza_name">Double burger
                                            {/*<img className="pizza_sticker" src="./imgs/Chili.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">23,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Double burger', 23000, './imgs/Burger1.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                    </div>

                    <button className="more">
                        Ko‘proq ko‘rish
                    </button>

                </div>
            </>
        );
    }
}

export default Burger;