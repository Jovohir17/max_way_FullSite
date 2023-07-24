import React, {Component} from 'react';
import {StyledCard} from "../Components/CardStyle/Card Style";

class Ichimliklar extends Component {
    render() {
        return (
            <>
                <div className="card__pizza">
                    <h1 data-aos="fade-right" className="Pitsa__h1"><span>Ichimliklar</span></h1>



                    <div className="dd-flex">
                        <StyledCard>
                            <div className="card__1" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/sprite.svg" alt="#"/>
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}
                                    <div className="card__about">
                                        <h2 className="pizza_name">Sprite 1L
                                            {/*<img className="pizza_sticker" src="./imgs/sir.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">6,000 UZS</h3>
                                            <button className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>
                        <StyledCard>
                            <div className="card__2" data-aos="fade-left">
                                <div className="card__df">

                                    <img className="pizza" src="./imgs/cola.svg" alt="#"/>

                                    {/*Top Burger*/}
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}

                                    <div className="card__about">
                                        <h2 className="pizza_name">Coca cola 1,5L
                                            {/*<img className="pizza_sticker" src="./imgs/Chili.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">9,000 UZS</h3>
                                            <button className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                    </div>
                    <div className="d-flex">
                        <StyledCard>
                            <div className="card__1 card__11" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/fanta.svg" alt="#"/>
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}
                                    <div className="card__about">
                                        <h2 className="pizza_name">Fanta 1L
                                            {/*<img className="pizza_sticker" src="./imgs/sir.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">6,000 UZS</h3>
                                            <button className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                    </div>
                </div>
            </>
        );
    }
}

export default Ichimliklar;