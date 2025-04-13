import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={store.addPost.bind(store)} //* Метод bind связывает callback функцию со store, потому что внутри store мы используем метод this и этот метод подставляет значения в зависимости от того, от чьего имени мы его вызываем. И т.к. callback функция вызывается от имени props, то и метод this будет работать от имени props. И чтобы он работал от имени store нам нужно с помощью метода bind жестко захардкодить(связать) callback функцию со store. bind(store).
				addMessage={store.addMessage.bind(store)}
				fluxSymbolCycleInPost={store.fluxSymbolCycleInPost.bind(store)}
				fluxSymbolCycleInMessage={store.fluxSymbolCycleInMessage.bind(store)}
			/>
		</React.StrictMode>
	);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
