import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";

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
			<Post />
			<Post />
		</div>
	)
}


export default MyPosts;