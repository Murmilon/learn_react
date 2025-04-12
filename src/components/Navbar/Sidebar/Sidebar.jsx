import React from "react";
import c from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import sidebarUserAvatar from './../../../images/user-avatar.jpg'


const activeFriend = () => {
	return (
		(active) => active.isActive ? c.active : c.sidebarLink
	)
}

const Sidebar = (props) => {
	const path = '/dialogs/' + props.id;

	return (
		<div className={c.sidebarBox}>
			<NavLink className={c.sidebarUserAvatar} to={path}>
				<img src={sidebarUserAvatar} alt="avatar" />
			</NavLink>
			<NavLink className={activeFriend()} to={path}>
				{props.name}
			</NavLink>
		</div>
	)
}

export default Sidebar;