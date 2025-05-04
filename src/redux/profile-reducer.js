const ADD_POST = 'ADD-POST';
const FLUX_SYMBOL_CYCLE_IN_POST = 'FLUX-SYMBOL-CYCLE-IN-POST';

let initialState = {
	profilePostsData: [
		{ id: 1, message: 'Hi', likesCount: '15', },
		{ id: 2, message: 'Hello', likesCount: '20', },
	],

	newPostText: '',
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				newPostText: '',
				profilePostsData: [...state.profilePostsData, newPost],
			};
		}

		case FLUX_SYMBOL_CYCLE_IN_POST: {
			return {
				...state,
				newPostText: action.newSymbol,
			};
		}

		default:
			return state;
	}
}

//*Функции, которые передаются в качестве параметра для функции dispatch
export const addPostActionCreator = () => ({ type: ADD_POST, });

export const fluxSymbolCycleInPostActionCreator = (text) =>
	({ type: FLUX_SYMBOL_CYCLE_IN_POST, newSymbol: text, });

export default profileReducer;