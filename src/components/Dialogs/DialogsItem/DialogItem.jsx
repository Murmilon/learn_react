import React from "react";
import c from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";
import dialogUserAvatar from './../../../images/user-avatar.jpg'

const activeFriend = () => {
	return (
		(active) => active.isActive ? c.active : c.dialog
	)
}

const DialogItem = (props) => {
	const path = '/dialogs/' + props.id;

	return (
		<div className={c.dialog}>
			<NavLink className={c.dialogUserAvatar} to={path}>
				<img src={dialogUserAvatar} alt="avatar" />
			</NavLink>
			<NavLink className={activeFriend()} to={path}>
				{props.name}
			</NavLink>
		</div>
	)
}

export default DialogItem;