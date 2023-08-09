import React from "react";
import { useState } from "react";

const CounterApp = () => {

	const [counter, setCounter] = useState(0);

	const incrementCounter = () =>{
		setCounter(counter+1)
	}

	return (
		<div>
			<button
				onClick={incrementCounter}
			>
				Increment
			</button>
			<h1>Cantidad de clics: {counter}</h1>
		</div>

	);
}

export default CounterApp;