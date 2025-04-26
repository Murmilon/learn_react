import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, fluxSymbolCycleInMessageActionCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	let fluxSymbolCycleInMessage = (text) => {
		props.store.dispatch(fluxSymbolCycleInMessageActionCreator(text))
	}

	return (
		<Dialogs
			addMessageActionCreator={addMessage}
			fluxSymbolCycleInMessageActionCreator={fluxSymbolCycleInMessage}
			dialogsPage={props.store.getState().dialogsPage}
		/>
	)
}

export default DialogsContainer;