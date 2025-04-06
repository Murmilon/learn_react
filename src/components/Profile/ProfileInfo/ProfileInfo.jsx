import React from "react";
import content_bg from './../../../images/header-bg.jpg'
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<>
			<div className={c.profile}>
				<img src={content_bg} alt='content-bg' />
			</div>
			<div>
				ava + descr
			</div>
		</>
	)
}

export default ProfileInfo;