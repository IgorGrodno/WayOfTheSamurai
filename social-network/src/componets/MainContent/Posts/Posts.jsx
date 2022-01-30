import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";


const Posts = ()=>{
    return( <div>
      <div className="my-posts-label">My posts</div>
      <div className="my-posts-textarea-container">
        <textarea id="post-text" className="post-textarea"></textarea>
      </div>
      <div className="send-button-container">
        <button id="post-send-button" className="post-send-button">
          Send
        </button>
      </div>
      <div className="posts-list-container">
      <Post text="post 1"/>
      <Post text="post 2"/>
      </div>
    </div>
    );
}

export default Posts;