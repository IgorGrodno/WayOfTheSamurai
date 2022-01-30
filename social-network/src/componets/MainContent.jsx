import React from "react";
import styles from "./MainContent.module.css";


const MainContent = ()=>{
    return( <div className={styles['main-content']}>
    <div className={styles['main-content-item']+" "+styles['main-img']}>
      <img
        src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
        alt="main-img"       
      />
    </div>
    <div className={styles['avatar-and-description']+" "+styles['main-content-item']}>
      <div className={styles['avatar-container']}>
        <img
          src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
          alt="avatar"
        />
      </div>
      <div className={styles['description-container']}>
        <div className="name">Jone Smith</div>
        <div className="description">
          <p>21 yers old</p>
          <p>agent</p>
        </div>
      </div>
    </div>
    <div>
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
        <div className="post">post 0</div>
        <div className="post">post 1</div>
      </div>
    </div>
  </div>
    );
}

export default MainContent;