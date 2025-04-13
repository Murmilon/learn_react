import { rerenderEntireTree } from './../render'

let state = {
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
}

export let addPost = () => {
	let newPost = {
		id: 3,
		message: state.profilePage.newPostText,
		likesCount: 0,
	}

	state.profilePage.profilePostsData.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let fluxSymbolCycleInPost = (newSymbol) => {
	state.profilePage.newPostText = newSymbol;
	rerenderEntireTree(state);
}

export let addMessage = () => {
	let newMessage = {
		id: 4,
		message: state.dialogsPage.newMessageText,
	}

	state.dialogsPage.dialogsMessagesData.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export let fluxSymbolCycleInMessage = (newSymbol) => {
	state.dialogsPage.newMessageText = newSymbol;
	rerenderEntireTree(state);
}

export default state;