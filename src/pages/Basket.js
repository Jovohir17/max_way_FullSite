import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Basket = () => {

    const handleRemoveFromCart = (itemIndex) => {
        const updatedCartItems = [...cartItems];
        const removedItem = updatedCartItems.splice(itemIndex, 1)[0];
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
    };

    const updateLocalStorage = (cartItems) => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    function removeFromLocalStorage(key) {
        try {
            localStorage.removeItem(key);
            return true; // Успешно удалено
        } catch (e) {
            console.error('Ошибка удаления из локального хранилища:', e);
            return false; // Произошла ошибка при удалении
        }
    }


    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartData = localStorage.getItem('cartItems');
        if (cartData) {
            setCartItems(JSON.parse(cartData));
        }
    }, []);



    return (
        <div className="container mt-5">
            <h1 className="mb-4">Корзина</h1>
            {cartItems.map((item, index) => (
                <div className="card mb-3" key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={item.imageSrc}
                                alt={item.name}
                                className="img-fluid rounded-start"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Цена: {item.price} UZS</p>

                                <div className="class__">
                                    <button className="btn btn-success">
                                        +
                                    </button>

                                    <button onClick={() => handleRemoveFromCart(index)} className="btn btn-danger">
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Basket;
