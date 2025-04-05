import React from "react";
import content_bg from './../../images/header-bg.jpg'
import c from './Profile.module.css'

const Profile = () => {
	return (
		<div className={c.content}>
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
	)
}

export default Profile;