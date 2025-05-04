const ADD_MESSAGE = 'ADD-MESSAGE';
const FLUX_SYMBOL_CYCLE_IN_MESSAGE = 'FLUX-SYMBOL-CYCLE-IN-MESSAGE';

let initialState = {
	dialogsUsersData: [
		{ id: 1, name: 'Dmitriy' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valeriy' },
	],

	dialogsMessagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hello' },
		{ id: 3, message: 'Yo' },
	],

	newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessageText,
			}
			return {
				...state,
				newMessageText: '',
				dialogsMessagesData: [...state.dialogsMessagesData, newMessage],
			}

		case FLUX_SYMBOL_CYCLE_IN_MESSAGE:
			return {
				...state,
				newMessageText: action.newSymbol,
			}

		default:
			return state;
	}
}

//*Функции, которые передаются в качестве параметра для функции dispatch
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, });

export const fluxSymbolCycleInMessageActionCreator = (text) => ({
	type: FLUX_SYMBOL_CYCLE_IN_MESSAGE, newSymbol: text,
});

export default dialogsReducer;