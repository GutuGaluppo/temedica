import React from 'react'
import logo from '../logo.png'

function Header() {
	return <header class="flex items-center justify-center md:justify-between w-full h-32 md:h-36 px-4">
		<img src={logo} className="App-logo" alt="logo" width="50px" />
		<a
			href="https://temedica.com/en/"
			target="_blank"
			rel="noopener noreferrer"
			class="no-underline hidden md:inline italic subpixel-antialiased font-bold text-xl text-gray-700"
		>
			Temedica
		</a>
	</header>
}

export default Header