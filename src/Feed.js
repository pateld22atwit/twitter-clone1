import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import socketIOClient from "socket.io-client";
import Post from "./Post";
import "./Feed.css";


// to-do add stream API integration here
function Feed() {

    const socket = socketIOClient("http://localhost:3000/");

    socket.on('connect', () => {
        console.log('Connected to server...')
    })

    socket.on('tweet', (tweet) => {
        // console.log(tweet)
        const tweetData = {
            id: tweet.data.id,
            text: tweet.data.text,
            username: `@${tweet.includes.users[0].username}`,
            displayName: `@${tweet.includes.users[0].name}`
        }
        return (
            <div className="feed">
                <div className="feed__header">
                    <h2>Home</h2>
                </div>

                <TweetBox/>
                <Post
                    key={tweetData.id}
                    displayName={tweetData.displayName}
                    username={tweetData.username}
                    verified={true}
                    text={tweetData.text}
                    //avatar={post.avatar}
                    //image={post.image}
                />
            </div>
        )
    })
}
export default Feed;


