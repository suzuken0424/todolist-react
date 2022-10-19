import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
 
const Posts: React.FC = () => {
    return (
        <div>
            <h1>記事一覧</h1>
            <ul>
                <li><Link to="/posts/1">記事1</Link></li>
                <li><Link to="/posts/2">記事2</Link></li>
                <li><Link to="/posts/3">記事3</Link></li>
            </ul>
        </div>
    )
}
 
export default Posts
