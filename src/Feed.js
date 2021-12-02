import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

// to-do add stream API integration here
function Feed() {
    /* useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
    }, []); */
    const socket = io();

    const tweets = [];

    socket.on('connect', () => {
        console.log('Connected to server...')
    });

    socket.on('tweet', (tweet) => {
        // console.log(tweet)
        const tweetData = {
            id: tweet.data.id,
            text: tweet.data.text,
            username: `@${tweet.includes.users[0].username}`,
            displayName: `@${tweet.includes.users[0].name}`,

        }
        return (

            <div className="feed">
                <div className="feed__header">
                    <h2>Home</h2>
                </div>

                <TweetBox/>

                <FlipMove>
                    <Post
                        key={tweetData.text}
                        displayName={tweetData.displayName}
                        username={tweetData.username}
                        // verified={post.verified}
                        text={tweetData.text}
                        //avatar={post.avatar}
                        //image={post.image}
                    />
                </FlipMove>
            </div>
        );
    });

}

