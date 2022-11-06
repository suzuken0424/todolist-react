import React from 'react';
import {useParams} from 'react-router-dom';

const Post: React.FC = () => {
	const {postId} = useParams();

	return (
		<div>
			<h2>投稿詳細</h2>
			<p>ID: { postId }</p>
		</div>
	);
};

export default Post;
