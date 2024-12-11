import React, { useEffect } from "react";
import logo from './favicon-96x96.png'
import abstract from './images/section-4.png'
import plain from './images/section-5.png'
import plain2 from './images/section-3.png'
import plain3 from './images/section-2.png'
import './App.css';

function Profile() {

  useEffect(() => {
    const horizontalRule = document.createElement('hr');
    horizontalRule.style.border = "0.1px solid black";

    const navElement = document.querySelector('.nav-bar');
    if (navElement) {
      navElement.insertAdjacentElement('afterend', horizontalRule);
    }
  }, []);

  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-div">
          <img src={logo} alt="header"></img>
          <ul className="list-item">
            <li>Live</li>
            <li>Push</li>
            <li>Link</li>
            <li>Shop</li>
            <li>Packs</li>
            <li>Help</li>
            <li>More +</li>
          </ul>
          <div className="nav-item">
            <ul>
              <li><a href="index">Try live for Free</a></li>
              <li><a href="index"><button>Account</button></a></li>
              <li><a href="index"><button>Log Out</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <body>
        <div className="header-logo">
          <ul>
            <li>About</li>
            <li>Jobs</li>
          </ul>
          <div className="header-h1">
            <h1><em>Fabulous</em></h1>
            <img src={abstract} alt="header"></img>
          </div>
        </div>
        <div className="about-section">
          <strong>We make Live, Push and Link -- unique software and hardware<br></br>
            for music creation and performance. With these products, our<br></br> community of
            users creates amazing things.
          </strong>
          <p>Our products are preferred by creative professionals and<br></br>
            hobbyists alike. The world’s most famous producers, composers, and<br></br>
            artists use our instruments to create the music you love.
          </p>
        </div>
        <div className="news-section">
          <img src={plain} alt="header"></img>
          <img src={plain2} alt="header"></img>
          <img src={plain3} alt="header"></img>
        </div>
        <p>hoe</p>
      </body>
    </div>
  )
};

export default Profile;
