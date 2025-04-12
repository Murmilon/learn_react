let state = {
	profilePage: {
		profilePostsData: [
			{ id: 1, message: 'Hi', likesCount: '15', },
			{ id: 2, message: 'Hello', likesCount: '20', },
		],
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
	},

	sidebar: [
		{ id: 1, name: 'Dmitriy' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
	],
}

export default state;