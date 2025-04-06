import React from "react";
import c from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const activeFriend = () => {
	return (
		(active) => active.isActive ? c.active : c.dialog
	)
}

const Dialogs = () => {
	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItem}>
				<div className={c.dialog}>
					<NavLink className={activeFriend()} to='/dialogs/1'>
						Dmitriy
					</NavLink>
				</div>
				<div className={c.dialog}>
					<NavLink className={activeFriend()} to='/dialogs/2'>
						Andrey
					</NavLink>
				</div>
				<div className={c.dialog}>
					<NavLink className={activeFriend()} to='/dialogs/3'>
						Sveta
					</NavLink>
				</div>
				<div className={c.dialog}>
					<NavLink className={activeFriend()} to='/dialogs/4'>
						Sasha
					</NavLink>
				</div>
				<div className={c.dialog}>
					<NavLink className={activeFriend()} to='/dialogs/5'>
						Viktor
					</NavLink>
				</div>
				<div className={c.dialog}>
					<NavLink className={activeFriend()} to='/dialogs/6'>
						Valeriy
					</NavLink>
				</div>
			</div>
			<div className={c.messages}>
				<div className={c.message}>
					Hi
				</div>
				<div className={c.message}>
					Hello
				</div>
				<div className={c.message}>
					Yo
				</div>
			</div>
		</div>
	)
}

export default Dialogs;