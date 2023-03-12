import React from "react";

const PostsList = (props) => {
    const posts = props.posts
    const setPosts = props.setPosts
    const idx = props.idx
    

    return (
    <div id="allPosts">
        {posts.length ? posts.map((post, idx)=> {
            return(
                <div key = {idx}>       
                    <h2>{post.title}</h2>
                    <li>{post.content}</li>
                    <li>{post.author.name}</li>
                    {post.tags.map((tag, idx)=>{
                        return(
                            <li key={idx}>{tag.name}</li>
                        )
                    } )}
                </div>
            )
        }
        )
        : <div className="loader"></div>
    }
        </div>
        )
}


export default PostsList