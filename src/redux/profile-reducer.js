const ADD_POST = 'ADD-POST';
const FLUX_SYMBOL_CYCLE_IN_POST = 'FLUX-SYMBOL-CYCLE-IN-POST';

const profileReducer = (state, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			}

			state.profilePostsData.push(newPost);
			state.newPostText = '';
			break;
		case FLUX_SYMBOL_CYCLE_IN_POST:
			state.newPostText = action.newSymbol;
			break;
		default:
			return state;
	}
	return state;
}

//*Функции, которые передаются в качестве параметра для функции dispatch
export const addPostActionCreator = () => ({ type: ADD_POST, });

export const fluxSymbolCycleInPostActionCreator = (text) =>
	({ type: FLUX_SYMBOL_CYCLE_IN_POST, newSymbol: text, });

export default profileReducer;