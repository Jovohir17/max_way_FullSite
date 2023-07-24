import React from 'react';
import "../Components/style/BurgerStyle.css"

function HamburgerMenu(props) {
    return (
        <>
            <!-- Simulate a smartphone / tablet -->
            <div class="mobile-container">

                <!-- Top Navigation Menu -->
                <div class="topnav">
                    <a href="#home" class="active">Logo</a>
                    <div id="myLinks">
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>

                <div style="padding-left:16px">
                    <h3>Vertical Mobile Navbar</h3>
                    <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
                    <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
                </div>

                <!-- End smartphone / tablet look -->
            </div>
        </>
    );
}

export default HamburgerMenu;