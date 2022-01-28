import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="wraper">
      <div className="app-grid">
        <header className="header">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
            className="logo-img"
          />
        </header>

        <nav className="nav">
          <ul>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Massages</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Setings</a>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <div className="main-img main-content-item">
            <img
              src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              alt="main-img"
            />
          </div>
          <div className="avatar-and-description main-content-item">
            <div className="avatar-container">
              <img
                src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                alt="avatar"
              />
            </div>
            <div className="description-container">
              <div className="name">Jone Smith</div>
              <div className="description">
                <p>21 yers old</p>
                <p>agent</p>
              </div>
            </div>
          </div>
          <div className="my-posts-container">
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
      </div>
    </div>
  );
};

export default App;
