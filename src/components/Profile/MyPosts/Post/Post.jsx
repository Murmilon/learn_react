import React from "react";
import c from './Post.module.css'
import avatar from './../../../../images/popular-3.jpg'

const Post = () => {
	return (
		<div className={c.posts}>
			<div className={c.post}>
				<img src={avatar} alt="post-avatar" />
				<div className={c.postText}>
					post 1
				</div>
				<div className={c.like}>
					like
				</div>
			</div>
		</div>
	)
}


export default Post;