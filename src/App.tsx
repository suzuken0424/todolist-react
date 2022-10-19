import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Layout from './components/Layout'
import Post from './components/Post'
 
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:postId" element={<Post />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
 

export default App
