import React from "react";
import c from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const activeLink = () => {
	return (
		(navData) => navData.isActive ? c.active : c.navbar__link
	)
}

const Navbar = (props) => {
	let sidebarElement = props.state.sidebar.map((sidebar) => {
		return (
			<Sidebar name={sidebar.name} id={sidebar.id} />
		)
	})

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
			<h3 className={c.title}>Friends</h3>
			<div className={c.sidebar}>
				{sidebarElement}
			</div>
		</nav>
	)
}

export default Navbar;