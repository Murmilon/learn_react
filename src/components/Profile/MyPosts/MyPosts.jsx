import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";

let postsData = [
	{ id: 1, message: 'Hi', likesCount: '15', },
	{ id: 2, message: 'Hello', likesCount: '20', },
]

let postsElements = postsData.map((post) => {
	return (
		<Post message={post.message} likesCount={post.likesCount} id={post.id} />
	)
})

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
			{postsElements}
		</div>
	)
}


export default MyPosts;