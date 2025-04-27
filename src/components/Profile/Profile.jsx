import React from "react";
import c from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
	return (
		<>
			<ProfileInfo />
			<MyPostsContainer />
		</>
	)
}

export default Profile;