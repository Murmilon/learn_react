import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let profilePostsData = [
	{ id: 1, message: 'Hi', likesCount: '15', },
	{ id: 2, message: 'Hello', likesCount: '20', },
]

let dialogsUsersData = [
	{ id: 1, name: 'Dmitriy' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Sasha' },
	{ id: 5, name: 'Viktor' },
	{ id: 6, name: 'Valeriy' },
]

let dialogsMessagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'Hello' },
	{ id: 3, message: 'Yo' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App
			profilePostsData={profilePostsData}
			dialogsUsersData={dialogsUsersData}
			dialogsMessagesData={dialogsMessagesData}
		/>
	</React.StrictMode>
);

reportWebVitals();
