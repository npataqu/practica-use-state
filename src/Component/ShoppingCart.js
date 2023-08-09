import React from "react";
import { useState } from "react";

const ShoppingCart = () => {

    const initialCart = [
        {
            id: 1,
            title: "Product",
            descripcion: "Desc#1"
        },
        {
            id: 2,
            title: "Product2",
            descripcion: "Desc#2"
        },
    ]

    const [cart, setCart] = useState(initialCart);


    const deteleProduct = (productId) => {
        const changeCart = cart.filter(item => item.id !== productId)
        setCart(changeCart)
    }

    const addProduct = (newProduct) => {
        const changeCart = [
            ...cart,
            newProduct,

        ];
        setCart(changeCart)
    }


    return (
        <div>
            <button
                onClick={() => addProduct({ title: "Nuevo Titulo", descripcion: "Nueva descripcion", id:4 })}
            >
                Agregar
            </button>

            {cart.map(item => (
                <div key={item.id}>
                    <h1>{item.id}{" "}{item.title} {" "} {item.descripcion}</h1>
                    <button
                        onClick={() => deteleProduct(item.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ShoppingCart;