import React from "react";
import c from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const activeFriend = () => {
	return (
		(active) => active.isActive ? c.active : c.dialog
	)
}

//*----------------------------
let dialogsData = [
	{ id: 1, name: 'Dmitriy' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Sasha' },
	{ id: 5, name: 'Viktor' },
	{ id: 6, name: 'Valeriy' },
]

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

let dialogsElements = dialogsData.map((dialog) => {
	return (
		<DialogItem name={dialog.name} id={dialog.id} />
	)
})

//*----------------------------
let messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'Hello' },
	{ id: 3, message: 'Yo' },
]

const Message = (props) => {
	return (
		<div className={c.message}>
			{props.message}
		</div>
	)
}

let messagesElements = messagesData.map((message) => {
	return (
		<Message message={message.message} id={message.id} />
	)
})

//*----------------------------
const Dialogs = () => {
	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;