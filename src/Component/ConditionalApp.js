import React from "react";
import { useState } from "react";

const ConditionalApp = () => {
    const [condition, setCondition] = useState(false);

    return (
        <div>
            <button
            onClick={()=> setCondition(!condition)}
            >
                Cambia el estado 
            </button>
            {/*condition ?<h1>message in true</h1>: <h1>Another message in false</h1>*/}
            {condition? <h1>Message in true </h1> : null}
        </div>
    );
}

export default ConditionalApp;