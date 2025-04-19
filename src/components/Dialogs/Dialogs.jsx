import React from "react";
import c from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsUsersData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id} />
		)
	})

	let messagesElements = props.state.dialogsMessagesData.map((message) => {
		return (
			<Message message={message.message} id={message.id} />
		)
	})

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.dispatch({ type: 'ADD-MESSAGE', })
	}

	let fluxSymbolCycleInMessage = () => {
		let text = newMessageElement.current.value;
		props.dispatch({ type: 'FLUX-SYMBOL-CYCLE-IN-MESSAGE', newSymbol: text, })
	}

	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messagesElements}
				<div className={c.textareaAndButton}>
					<div className={c.textarea}>
						<textarea
							onChange={fluxSymbolCycleInMessage}
							ref={newMessageElement}
							name="text"
							value={props.state.newMessageText}
						/>
					</div>
					<div className={c.button}>
						<button onClick={addMessage}>Add Message</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;