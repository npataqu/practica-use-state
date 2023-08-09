import React from "react";
import { useState } from "react";

const ListProducts = () => {

      const [list, setList] = useState([]);

    const updateList = () =>{
    const newElement= `El punto ${list.length + 1}se ha añadio`;
    setList([...list, newElement]);
    }

    return (
        <div>
            <button
            onClick={updateList}
            >
                agregar lista
            </button>

            <button
            onClick={()=>setList([])}
            >
                Delete
            </button>
            {list.map(item => (
                <div key={item.id}>
                    <li>{item}</li>
                </div>

            ))}
        </div>
    )
}

export default ListProducts;