import React from 'react'
import logo from '../assets/ZSE-banner.png';
import '../App.css';

export default function Header() {
  return (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
         <code>Jakub Bąk</code><br /> System zgłoszeń spraw uczniowskich
        </h2>
    </header>
  )
}
