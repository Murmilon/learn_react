let store = {

	_rerenderEntireTree() {
		console.log('State changed');
	}, //* Этoт метод мутирован с помощью метода subscribe. Теперь он служит наблюдателем для перерисовки всего дерева, при изменении state. Это сделано для того, чтобы избежать циклической зависимости import/export между файлами state и index.

	getState() {
		return this._state;
	},

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


	addPost() {
		let newPost = {
			id: 3,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		}

		this._state.profilePage.profilePostsData.push(newPost);
		this._state.profilePage.newPostText = '';
		this._rerenderEntireTree(this._state);
	},

	fluxSymbolCycleInPost(newSymbol) {
		this._state.profilePage.newPostText = newSymbol;
		this._rerenderEntireTree(this._state);
	},

	addMessage() {
		let newMessage = {
			id: 4,
			message: this._state.dialogsPage.newMessageText,
		}

		this._state.dialogsPage.dialogsMessagesData.push(newMessage);
		this._state.dialogsPage.newMessageText = '';
		this._rerenderEntireTree(this._state);
	},

	fluxSymbolCycleInMessage(newSymbol) {
		this._state.dialogsPage.newMessageText = newSymbol;
		this._rerenderEntireTree(this._state);
	},

	subscribe(observer) {
		this._rerenderEntireTree = observer;
	}, //* Этот метод мутирует метод rerenderEntireTree, чтобы избежать циклической записимости import/export между файлами state и index. В качестве параметра observer он принимает настоящую функцияю rerenderEntireTree из index.js
}

export default store;