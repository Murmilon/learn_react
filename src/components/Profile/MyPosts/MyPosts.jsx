import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postsElements = props.profilePostsData.map((post) => {
		return (
			<Post message={post.message} likesCount={post.likesCount} id={post.id} />
		)
	})

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div className={c.myPosts}>
			<h3 className={c.title}>
				My posts
			</h3>
			<div className={c.textareaButtonBox}>
				<div className={c.textarea}>
					<textarea ref={newPostElement} name="text"></textarea>
				</div>
				<div className={c.button}>
					<button onClick={addPost}>Add Post</button>
				</div>
			</div>
			{postsElements}
		</div>
	)
}


export default MyPosts;