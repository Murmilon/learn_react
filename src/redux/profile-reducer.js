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
			let stateCopy = { ...state };
			stateCopy.profilePostsData = [...state.profilePostsData];

			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			}

			stateCopy.profilePostsData.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case FLUX_SYMBOL_CYCLE_IN_POST: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newSymbol;
			return stateCopy;
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