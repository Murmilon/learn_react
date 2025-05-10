import React from "react";
import c from './Users.module.css'

let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
			{ id: 1, photoURL: 'https://i.playboard.app/p/AATXAJy_DSep54mX37Ww_hNwEXsW-sXGGLmJ60WKzeBP/default.jpg', followed: false, fullName: 'Dmitry K.', status: 'I am a Boss', location: { city: 'Minsk', country: 'Belarus' } },
			{ id: 2, photoURL: 'https://i.playboard.app/p/AATXAJy_DSep54mX37Ww_hNwEXsW-sXGGLmJ60WKzeBP/default.jpg', followed: true, fullName: 'Andrew', status: 'YO', location: { city: 'Moscow', country: 'Russia' } },
			{ id: 3, photoURL: 'https://i.playboard.app/p/AATXAJy_DSep54mX37Ww_hNwEXsW-sXGGLmJ60WKzeBP/default.jpg', followed: false, fullName: 'Sasha', status: 'YOLO', location: { city: 'Kiev', country: 'Ukraine' } },
		]);
	}

	return <div>
		{
			props.users.map((user) => {
				return (
					<div key={user.id} >
						<div>
							<div>
								<img className={c.userPhoto} src={user.photoURL} />
							</div>
							<div>
								{user.followed
									? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
									: <button onClick={() => { props.follow(user.id) }}>Follow</button>}
							</div>
						</div>
						<div>
							<div>
								<div>{user.fullName}</div>
								<div>{user.status}</div>
							</div>
							<div>
								<div>{user.location.country}</div>
								<div>{user.location.city}</div>
							</div>
						</div>
					</div>
				)
			})
		}
	</div >
}

export default Users;