import React from "react";
import c from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const activeLink = () => {
	return (
		(navData) => navData.isActive ? c.active : c.navbar__link
	)
}

const Navbar = () => {
	return (
		<nav className={c.navbar}>
			<ul className={c.navbar__box}>
				<li className={c.navbar__link}>
					<NavLink to="/profile" className={activeLink()}>
						Profile
					</NavLink>
				</li>
				<li className={c.navbar__link}>
					<NavLink to="/dialogs" className={activeLink()}>
						Dialogs
					</NavLink>
				</li>
				<li className={c.navbar__link}>
					<NavLink to="/news" className={activeLink()}>
						News
					</NavLink>
				</li>
				<li className={c.navbar__link}>
					<NavLink to="/music" className={activeLink()}>
						Music
					</NavLink>
				</li>
				<li className={c.navbar__link}>
					<NavLink to="/settings" className={activeLink()}>
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;