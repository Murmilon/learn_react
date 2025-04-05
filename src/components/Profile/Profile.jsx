import React from "react";
import content_bg from './../../images/header-bg.jpg'
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<>
			<div className={c.profile}>
				<img src={content_bg} alt='content-bg' />
			</div>
			<div>
				ava + descr
			</div>
			<MyPosts />
		</>
	)
}

export default Profile;