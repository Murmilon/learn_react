import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
	return (
		<>
			<ProfileInfo />
			<MyPosts
				profilePostsData={props.state.profilePostsData}
				addPost={props.addPost}
			/>
		</>
	)
}

export default Profile;