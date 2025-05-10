import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';


function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<div className='app-wrapper'>
					<Header />
					<NavbarContainer />
					<div className='app-wrapper-content'>
						<Routes>
							<Route path='/profile/*' element={<Profile />} />
							<Route path='/dialogs/*' element={<DialogsContainer />} />
							<Route path='/news/*' element={<News />} />
							<Route path='/music/*' element={<Music />} />
							<Route path='/users/*' element={<UsersContainer />} />
							<Route path='/settings/*' element={<Settings />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
