import React from "react";
import { useState } from "react";

const ProductApp = () => {

const initialProduct={
    title:"Titulo",
    descripcion: "Descripcion"
}

const [product, setProduct]= useState(initialProduct)

const updateProduct = (property, value)=>{
    setProduct({
        ...product,
        [property]: value
       
    })
}

    return (
        <div>
            <button
            onClick={()=>updateProduct("descripcion", "Una nueva descripcion")}
            >
                actualiza tu producto
            </button>
              <h1>{product.title}</h1>
              <h1>{product.descripcion}</h1>
        </div>
    );
}

export default ProductApp;