import logo from './images/logo.svg'
import content_bg from './images/header-bg.jpg'
import './App.css';

function App() {
	return (
		<div className='container'>
			<div className='app-wrapper'>
				<header className='header'>
					<img src={logo} alt='logo' />
				</header>
				<nav className='navbar'>
					<ul className='navbar__box'>
						<li className='navbar__item'>
							<a className='navbar__link'>
								Profile
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link'>
								Messages
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link'>
								News
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link'>
								Music
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link'>
								Settings
							</a>
						</li>
					</ul>
				</nav>
				<div className='content'>
					<div>
						<img src={content_bg} alt='content-bg' />
					</div>
					<div>
						ava + descr
					</div>
					<div>
						My posts
						<div>
							New post
						</div>
					</div>
					<div>
						<div>
							post 1
						</div>
						<div>
							post 2
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
