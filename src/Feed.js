import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

// to-do add stream API integration here

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <Post
            key="this man"
            displayName="love"
            username="G-money"
            verified={true}
            text="testing"
            //avatar={post.avatar}
            //image={post.image}
      />
    </div>
  )
}

export default Feed;


