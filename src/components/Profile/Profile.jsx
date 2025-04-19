import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
	return (
		<>
			<ProfileInfo />
			<MyPosts
				profilePostsData={props.profilePage.profilePostsData}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}
			/>
		</>
	)
}

export default Profile;