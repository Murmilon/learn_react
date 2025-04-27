import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, fluxSymbolCycleInMessageActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		dialogsUsersData: state.dialogsPage.dialogsUsersData,
		dialogsMessagesData: state.dialogsPage.dialogsMessagesData,
		newMessageText: state.dialogsPage.newMessageText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessageActionCreator: () => {
			dispatch(addMessageActionCreator())
		},
		fluxSymbolCycleInMessageActionCreator: (text) => {
			dispatch(fluxSymbolCycleInMessageActionCreator(text))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;