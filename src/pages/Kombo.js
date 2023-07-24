import React, {Component} from 'react';
import {StyledCard} from "../Components/CardStyle/Card Style";

class Kombo extends Component {
    render() {
        return (
            <>
                <div className="card__pizza">
                    <h1 data-aos="fade-right" className="Pitsa__h1"><span>Kombo</span></h1>



                    <div className="dd-flex">
                        <StyledCard>
                            <div className="card__1" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/Kombo__max.png" alt="#"/>
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}
                                    <div className="card__about">
                                        <h2 className="pizza_name">Kombo-1
                                            {/*<img className="pizza_sticker" src="./imgs/sir.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">25,000 UZS</h3>
                                            <button className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>
                        <StyledCard>
                            <div className="card__2" data-aos="fade-left">
                                <div className="card__df">

                                    <img className="pizza" src="./imgs/burger__combo.png" alt="#"/>

                                    {/*Top Burger*/}
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}

                                    <div className="card__about">
                                        <h2 className="pizza_name">kombo-2
                                            {/*<img className="pizza_sticker" src="./imgs/Chili.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">23,000 UZS</h3>
                                            <button className="plus__button"><img className="img__plus" src="./imgs/plus.svg" alt="plus"/></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </StyledCard>

                    </div>
                    <div className="d-flex">
                        <StyledCard>
                            <div className="card__1" data-aos="fade-right">
                                <div className="card__df">
                                    <img className="pizza" src="./imgs/kombo__max.png" alt="#"/>
                                    {/*<div className="fire__backround">*/}
                                    {/*    <img className="imgg" src="./imgs/firee.svg" alt=""/>*/}
                                    {/*</div>*/}
                                    <div className="card__about">
                                        <h2 className="pizza_name">kombo-3
                                            {/*<img className="pizza_sticker" src="./imgs/sir.svg" alt="sir"/>*/}
                                        </h2>
                                        <p className="pizza_about">
                                            Горячая закуска с митболами
                                            из говядины, томатами,
                                            моцареллой и соусом чипотле
                                        </p>
                                        <div className="narx__df">
                                            <h3 className="pizza_narx">30,000 UZS</h3>
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

export default Kombo;