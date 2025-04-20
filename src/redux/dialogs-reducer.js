const ADD_MESSAGE = 'ADD-MESSAGE';
const FLUX_SYMBOL_CYCLE_IN_MESSAGE = 'FLUX-SYMBOL-CYCLE-IN-MESSAGE';

const dialogsReducer = (state, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessageText,
			}

			state.dialogsMessagesData.push(newMessage);
			state.newMessageText = '';
			break;
		case FLUX_SYMBOL_CYCLE_IN_MESSAGE:
			state.newMessageText = action.newSymbol;
			break;
		default:
			return state;
	}
	return state;
}

//*Функции, которые передаются в качестве параметра для функции dispatch
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, });

export const fluxSymbolCycleInMessageActionCreator = (text) => ({
	type: FLUX_SYMBOL_CYCLE_IN_MESSAGE, newSymbol: text,
});

export default dialogsReducer;