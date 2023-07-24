import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="d-flex">

                    <img className="logo" src="./imgs/logo.svg" alt=""/>
                    <div className="none">

                    <div className="Asosiy">
                        <h2>Asosiy</h2>
                        <p>Kompaniya haqida <br/>
                            Filiallarbr <br />
                            Bolalar uchun</p>
                    </div>

                    <div className="Qoshimcha">
                        <h2>Qo’shimcha</h2>
                        <p>Menyu <br/>
                            Bonusli karta <br/>
                            Bu qanday ishlaydi?</p>
                    </div>

                    </div>

                    <div className="Biz_bilan_aloqa">
                        <h2 className="aboutt">Biz bilan aloqa</h2>

                        <h2 className="nomer">(+998 71) 200-54-00</h2>

                        <p>100011, Toshkent sh. Shayxontohur tumani,
                            Zarqaynar ko’chasi, 3B-uy</p>
                    </div>
                    </div>

                    <hr/>

                     <div className="d-flex">

                    <p className="maxway">© Maxway, 2020</p>

                    <div className="icons">
                        <a href="https://www.youtube.com/@maxway2010"><img src="./imgs/youtube.svg" alt="youtube"/></a>
                        <a href="https://www.facebook.com/"><img src="./imgs/facebook.svg" alt="facebook"/></a>
                        <a href="https://www.instagram.com/"><img src="./imgs/inst.svg" alt="insta"/></a>
                        <a href="https://web.telegram.org/k/"><img src="./imgs/telega.svg" alt="telega"/></a>
                        <a href="https://www.tiktok.com/"><img src="./imgs/tiktok.svg" alt="tik tok"/></a>
                    </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;