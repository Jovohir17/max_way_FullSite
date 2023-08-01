import React, {Component} from 'react';
import {StyledCard} from "../Components/CardStyle/Card Style";
import "../Components/style/PizzaStyle.css"

class Pitsa extends Component {

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
                    <h1 data-aos="fade-right" className="Pitsa__h1"><span>Pitsa</span></h1>

                    <div className="dd-flex">
                        <StyledCard>
                            <div className="card__1" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/Bitmap.png" alt="#"/>
                                    <div className="fire__backround">
                                        <img className="imgg" src="./imgs/firee.svg" alt=""/>
                                    </div>
                                    <div className="card__about">
                                        <h2 className="pizza_name">Gavaya <img className="pizza_sticker" src="./imgs/sir.svg" alt="sir"/></h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">45,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Gavaya', 45000, './imgs/Bitmap.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                            <StyledCard>

                                            </StyledCard>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                        <StyledCard version="Card2">

                            <div className="card__2" data-aos="fade-left">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/chili__pizza.png" alt="#"/>

                                    {/*Trend sticker*/}

                                    <div className="fire__backround">
                                        <img className="imgg" src="./imgs/firee.svg" alt=""/>
                                    </div>

                                    <div className="card__about">
                                        <h2 className="pizza_name">Mexica <img className="pizza_sticker" src="./imgs/chili.svg" alt="sir"/></h2>

                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>

                                        <div className="narx__df">
                                            <h3 className="pizza_narx">53,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Mexica', 53000, './imgs/chili__pizza.png')}
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
                                    <img className="pizza" src="./imgs/papperoni.png" alt="#"/>

                                    {/*Top pitsa */}
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}


                                    <div className="card__about">
                                        <h2 className="pizza_name">Hot achchiko <img className="pizza_sticker" src="./imgs/lucky.svg" alt="sir"/></h2>
                                        <p className="pizza_about">

                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">64,000 UZS</h3>
                                            <button

                                                onClick={() => this.handleAddToCart('Hot achchiko', 64000, './imgs/papperoni.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                            <StyledCard>

                                            </StyledCard>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                        <StyledCard version="Card2">

                            <div className="card__2" data-aos="fade-left">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/kolbaska__pizza.png" alt="#"/>

                                    {/*Trend sticker*/}

                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}

                                    <div className="card__about">
                                        <h2 className="pizza_name">Mexica
                                            {/*<img className="pizza_sticker" src="./imgs/chili.svg" alt="sir"/>*/}
                                        </h2>

                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>

                                        <div className="narx__df">
                                            <h3 className="pizza_narx">45,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Mexica', 45000, './imgs/kolbaska__pizza.png')}
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
                                    <img className="pizza" src="./imgs/papperoni.png" alt="#"/>

                                    {/*Top pitsa */}
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}


                                    <div className="card__about">
                                        <h2 className="pizza_name">Apocalipo<img className="pizza_sticker" src="./imgs/chili.svg" alt="sir"/></h2>
                                        <p className="pizza_about">

                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">64,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Apocalipo', 64000, './imgs/papperoni.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                            <StyledCard>

                                            </StyledCard>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                        <StyledCard version="Card2">

                            <div className="card__2" data-aos="fade-left">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/kolbaska__pizza.png" alt="#"/>

                                    {/*Trend sticker*/}

                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}

                                    <div className="card__about">
                                        <h2 className="pizza_name">Sosiskacho<img className="pizza_sticker" src="./imgs/lucky.svg" alt="sir"/></h2>

                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>

                                        <div className="narx__df">
                                            <h3 className="pizza_narx">45,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Sosiskacho', 45000, './imgs/kolbaska__pizza.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>
                    </div>
                    <div className="end">
                        <StyledCard>
                            <div className="card__1" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/chili__pizza.png" alt="#"/>

                                    {/*Top pitsa */}
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}


                                    <div className="card__about">
                                        <h2 className="pizza_name">Mexico
                                            {/*<img className="pizza_sticker" src="./imgs/lucky.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">

                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">64,000 UZS</h3>
                                            <button
                                                onClick={() => this.handleAddToCart('Mexico', 64000, './imgs/chili__pizza.png')}
                                                className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                            <StyledCard>

                                            </StyledCard>

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

export default Pitsa;