import React, { useEffect, useState } from "react";
import { Navbar, PostsList } from "./";
import { getAllPosts } from "../API-Adapter";

const Main = () => {
    const [posts, setPosts] = useState([])
    
    
    const retrievePosts = async () => {
        const allPosts = await getAllPosts()
        setPosts(allPosts)
        console.log("!!!!",allPosts)
    }

    
    useEffect(()=> {
        retrievePosts();
    }, [])
    
    return(
        <div id="main">
            <Navbar />
            <PostsList posts = {posts} setPosts = {setPosts}/> 
        </div>
    )
}

export default Main