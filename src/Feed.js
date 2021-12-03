import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import socketIOClient from "socket.io-client";
import Post from "./Post";
import "./Feed.css";

// to-do add stream API integration here
function Feed (){

     const [posts, setPosts] = useState([]);

     useEffect(() => {
        const socket = socketIOClient('http://localhost:3000/');

        socket.on("connect", () => {
            console.log("Socket Connected");
        });

        socket.on("tweets", data => {
            console.info(data);
            let newList = [data]
            setPosts(newList);
        });

     }, []);

      return (
            <div className="feed">
                <div className="feed__header">
                    <h2>Home</h2>
                </div>

                <TweetBox/>

                {posts.map(post =>(
                <Post
                    key={post.data.id}
                    displayName="life"
                    username="better"
                    verified="understand"
                    text={post.data.text}
                    //avatar={post.avatar}
                    //image={post.image}

                />
                    ))}
            </div>
        )
}
export default Feed;

