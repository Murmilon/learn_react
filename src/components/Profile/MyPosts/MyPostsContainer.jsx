import React from "react";
import { addPostActionCreator, fluxSymbolCycleInPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let fluxSymbolCycleInPost = (text) => {
		props.store.dispatch(fluxSymbolCycleInPostActionCreator(text))
	}

	return (
		<MyPosts
			addPost={addPost}
			fluxSymbolCycleInPostActionCreator={fluxSymbolCycleInPost}
			profilePage={props.store.getState().profilePage} />
	)
}


export default MyPostsContainer;