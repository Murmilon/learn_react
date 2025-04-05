import React from "react";
import logo from './../../images/logo.svg'
import c from './Header.module.css'

const Header = () => {
	return (
		<header className={c.header}>
			<img src={logo} alt='logo' />
		</header>
	)
}

export default Header;