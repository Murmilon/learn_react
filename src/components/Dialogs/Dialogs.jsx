import React from "react";
import c from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.dialogsUsersData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id} />
		)
	})

	let messagesElements = props.dialogsMessagesData.map((message) => {
		return (
			<Message message={message.message} id={message.id} />
		)
	})

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