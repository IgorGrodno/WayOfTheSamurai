import React from "react";
import styles from "./Post.module.css";


const Post = (props)=>{
    return( 
        <div>{props.text}</div>       
    );
}

export default Post;