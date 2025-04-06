import React from "react";
import c from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const activeFriend = () => {
	return (
		(active) => active.isActive ? c.active : c.dialog
	)
}

const DialogItem = (props) => {
	const path = '/dialogs/' + props.id;

	return (
		<div className={c.dialog}>
			<NavLink className={activeFriend()} to={path}>
				{props.name}
			</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={c.message}>
			{props.message}
		</div>
	)
}

const Dialogs = () => {
	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItem}>
				<DialogItem name='Dmitriy' id='1' />
				<DialogItem name='Andrey' id='2' />
				<DialogItem name='Sveta' id='3' />
				<DialogItem name='Sasha' id='4' />
				<DialogItem name='Viktor' id='5' />
				<DialogItem name='Valeriy' id='6' />
			</div>
			<div className={c.messages}>
				<Message message='Hi' />
				<Message message='Hello' />
				<Message message='Yo' />
			</div>
		</div>
	)
}

export default Dialogs;