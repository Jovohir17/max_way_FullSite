import React, { useState } from 'react';
import Pitsa from "../pages/Pitsa";
import Burger from "../pages/Burger";
import Kombo from "../pages/Kombo";
import Ichimliklar from "../pages/Ichimliklar";

const ObjectFilter = () => {
    const [activeFilter, setActiveFilter] = useState('Hammasi');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const objects = [
        { id: 0, title: 'Hammasi' },
        { id: 1, title: 'Pitsa', description: <Pitsa /> },
        { id: 2, title: 'Burger', description: <Burger /> },
        { id: 3, title: 'Kombo', description: <Kombo /> },
        { id: 4, title: 'Ichimliklar', description: <Ichimliklar /> },
    ];

    const filteredObjects = activeFilter === 'Hammasi' ? [objects[0], ...objects.slice(1)] : objects.filter((object) => object.title === activeFilter);

    return (
        <>
            <main>
            <button className="Filtr"><img className="filter-img" src="./imgs/Group.svg" alt="dd"/> Filtr</button>

            <div className="filter-container">
                {objects.map((object) => (
                    <button
                        key={object.id}
                        className={object.title === activeFilter ? 'active' : ''}
                        onClick={() => handleFilterChange(object.title)}
                    >
                        {object.title}
                    </button>
                ))}
            </div>
            <div>
                {filteredObjects.map((object) => (
                    <div key={object.id}>
                        {object.description}
                    </div>
                ))}
            </div>


            <div className="cointainer__apk">

                <h2 data-aos="zoom-out-down" data-aos-duraction="1000">Mobil ilovamiz
                    orqali buyurtma
                    berish yanada osonroq</h2>

                <div className="button__group">

                <button>
                    <img data-aos="fade-right" data-aos-duraction="1000" src="./imgs/googleplay.svg" alt="play__market"/>
                </button>

                <button className="button__2">
                    <img data-aos="fade-right" data-aos-duraction="1000" src="./imgs/appstore.svg" alt="app__store"/>
                </button>
                </div>

                <div className="image-container">
                    <img className="phone" src="./imgs/White.png" alt=""/>
                </div>


                    <img className="path" src="./imgs/Path.png" alt=""/>
                    <img className="path__full" src="./imgs/Path__Full.png" alt=""/>
            </div>
            </main>
        </>
    );
};

export default ObjectFilter;
