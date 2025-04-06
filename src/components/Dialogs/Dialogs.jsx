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

let dialogsData = [
	{ id: 1, name: 'Dmitriy' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Sasha' },
	{ id: 5, name: 'Viktor' },
	{ id: 6, name: 'Valeriy' },
]

let messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'Hello' },
	{ id: 3, message: 'Yo' },
]

const Dialogs = () => {
	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItem}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name='Andrey' id='2' />
				<DialogItem name='Sveta' id='3' />
				<DialogItem name='Sasha' id='4' />
				<DialogItem name='Viktor' id='5' />
				<DialogItem name='Valeriy' id='6' />
			</div>
			<div className={c.messages}>
				<Message message={messagesData[0].message} id={messagesData[0].id} />
				<Message message='Hello' />
				<Message message='Yo' />
			</div>
		</div>
	)
}

export default Dialogs;