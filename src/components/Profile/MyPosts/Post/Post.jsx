import React from "react";
import c from './Post.module.css'
import avatar from './../../../../images/popular-3.jpg'

const Post = (props) => {
	return (
		<div className={c.posts}>
			<div className={c.post}>
				<img src={avatar} alt="post-avatar" />
				<div className={c.postText}>
					{props.message}
				</div>
				<div className={c.like}>
					like {props.likesCount}
				</div>
			</div>
		</div>
	)
}


export default Post;