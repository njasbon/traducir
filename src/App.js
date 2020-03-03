import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from "./Banner";
import TranslateButton from "./TranslateButton";

export default function App () {
  const [idioma, setIdioma] = useState("espanol")

  function traducir(){
    setIdioma(idioma === "ingles" ? "espanol": "ingles")
  }

  return (
    <div>
      <TranslateButton clicker={() => traducir()}/>
      <Banner idioma={idioma}/>
    </div>

    ) 
}
