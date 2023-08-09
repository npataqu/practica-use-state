import React from "react";
import { useState } from "react";

const ErrorApp = () => {
    const [error, setError] = useState("");

    return (
        <div>
            <button
            onClick={()=> setError("Error en el password")}
            >
                Error
            </button>
         {error && <h1>{error}</h1>}
        </div>
    );
}

export default ErrorApp;