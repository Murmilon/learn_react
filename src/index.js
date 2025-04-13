import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'
import './index.css';
import App from './App';
import { addMessage, addPost, fluxSymbolCycleInPost, fluxSymbolCycleInMessage } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				addMessage={addMessage}
				fluxSymbolCycleInPost={fluxSymbolCycleInPost}
				fluxSymbolCycleInMessage={fluxSymbolCycleInMessage}
			/>
		</React.StrictMode>
	);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
