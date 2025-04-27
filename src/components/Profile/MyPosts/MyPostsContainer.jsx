import React from "react";
import { addPostActionCreator, fluxSymbolCycleInPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		profilePostsData: state.profilePage.profilePostsData,
		newPostText: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPostActionCreator: () => {
			dispatch(addPostActionCreator());
		},
		fluxSymbolCycleInPostActionCreator: (text) => {
			dispatch(fluxSymbolCycleInPostActionCreator(text))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;