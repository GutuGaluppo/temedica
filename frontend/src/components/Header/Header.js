import React from 'react'
import './Header.css'
import logo from '../../logo.png'

function Header() {
	return <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" width="50px" />
		<a href="https://temedica.com/en/" target="_blank" rel="noopener noreferrer">Temedica</a>
	</header>
}

export default Header