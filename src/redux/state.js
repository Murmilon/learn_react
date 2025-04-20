import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_rerenderEntireTree() {
		console.log('State changed');
	}, //* Этoт метод мутирован с помощью метода subscribe. Теперь он служит наблюдателем для перерисовки всего дерева, при изменении state. Это сделано для того, чтобы избежать циклической зависимости import/export между файлами state и index.

	_state: {
		profilePage: {
			profilePostsData: [
				{ id: 1, message: 'Hi', likesCount: '15', },
				{ id: 2, message: 'Hello', likesCount: '20', },
			],

			newPostText: '',
		},

		dialogsPage: {
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
		},

		sidebar: [
			{ id: 1, name: 'Dmitriy' },
			{ id: 2, name: 'Andrey' },
			{ id: 3, name: 'Sveta' },
		],
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._rerenderEntireTree = observer;
	}, //* Этот метод мутирует метод rerenderEntireTree, чтобы избежать циклической записимости import/export между файлами state и index. В качестве параметра observer он принимает настоящую функцияю rerenderEntireTree из index.js

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._rerenderEntireTree(this._state);
	},
}

export default store;