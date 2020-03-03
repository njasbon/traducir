import React from "react";

export default function Banner(props){
	let palabra = props.idioma === "ingles" ? "hi" : "hola";
	return (
		 <h1>{palabra}</h1>
	)
}
