import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";

let postData = [
	{ id: 1, message: 'Hi', likesCount: '15', },
	{ id: 2, message: 'Hello', likesCount: '20', },
]

const MyPosts = () => {
	return (
		<div className={c.myPosts}>
			<h3 className={c.title}>
				My posts
			</h3>
			<div className={c.textareaButtonBox}>
				<div className={c.textarea}>
					<textarea name="text"></textarea>
				</div>
				<div className={c.button}>
					<button>Add Post</button>
				</div>
			</div>
			<Post message={postData[0].message} likesCount={postData[0].likesCount} />
			<Post message='Hello' likesCount='20' />
		</div>
	)
}


export default MyPosts;