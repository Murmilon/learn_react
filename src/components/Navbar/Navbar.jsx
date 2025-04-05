import React from "react";
import c from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={c.navbar}>
			<ul className={c.navbar__box}>
				<li className={c.navbar__item}>
					<a className={`${c.navbar__link} ${c.active}`}>
						Profile
					</a>
				</li>
				<li className={c.navbar__item}>
					<a className={c.navbar__link}>
						Messages
					</a>
				</li>
				<li className={c.navbar__item}>
					<a className={c.navbar__link}>
						News
					</a>
				</li>
				<li className={c.navbar__item}>
					<a className={c.navbar__link}>
						Music
					</a>
				</li>
				<li className={c.navbar__item}>
					<a className={c.navbar__link}>
						Settings
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;