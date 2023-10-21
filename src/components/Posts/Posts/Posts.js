// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
import {useEffect, useState} from "react";

import {Post} from "../Post/Post";
import css from './css.module.css'
import {postsService} from "../../../services/postsService";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const [postDetails, setPostDetails] = useState(null);


    const click = async (postId) => {
        const {data} = await postsService.getById(postId);
        setPostDetails(data)
    }

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }

            <div className={css.posts}>
                {posts.map(post => <Post key={post.id} post={post} click={click}/>)}
            </div>
        </div>
    );
};

export {Posts};