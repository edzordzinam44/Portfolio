import React, { useEffect } from "react";
import logo from './favicon-96x96.png'
import abstract from './images/section-4.png'
import plain from './images/section-5.png'
import plain2 from './images/section-3.png'
import plain3 from './images/section-2.png'
import plain4 from './images/section-6.png'
import plain5 from './images/section-7.png'
import plain6 from './images/section-8.png'
import plain7 from './images/section-9.png'
import plain8 from './images/section-10.png'
import plain9 from './images/section-11.png'
import plain10 from './images/section-12.png'
import plain11 from './images/section-13.png'
import plain12 from './images/section-14.png'
import plain13 from './images/section-15.png'
import plain14 from './images/section-16.png'
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
        <div className="speech-section">
          <h1>Our Mission</h1>
          <p><strong>Our goal is to inspire and enable people to be creative. We believe<br></br>
            that our products can help people express their creativity and lead<br></br>
            more fulfilling lives.</strong><br></br>
            We feel the same way about our employees. We believe in
            creating a culture that inspires and enables our employees to do<br></br>
            the best work of their lives.
          </p>
          <div className="container">
            <img src={plain4} alt="speech-img"></img>
            <p><strong>This is how I'd like to design my room</strong></p>
          </div>
        </div>
        <div className="speech-section">
          <h1>Our Values</h1>
          <p><strong>Our values are the things that we believe are important. They guide<br></br>
            our decisions and actions. They influence the way we work and the<br></br>
            way we treat each other. They help us to achieve our mission.</strong><br></br>
            Our values are: Creativity, Innovation, Quality, Community, Sustainability.
          </p>
        </div>
        <div className="news-section-2">
          <img src={plain5} alt="header"></img>
          <img src={plain6} alt="header"></img>
          <img src={plain7} alt="header"></img>
          <img src={plain8} alt="header"></img>
        </div>
        <div className="speech-section">
          <p>
            <strong>Our products are preferred by creative professionals and hobbyists alike.<br></br>The world’s most famous producers, composers,<br></br> and artists use our instruments to create the music you love.</strong><br></br>
            It such a great platform to work with. I am so happy to be a part of this community.<br></br> I have learned so much from this platform and I am so grateful for that.
          </p>
        </div>
        <div className="news-section-3">
          <img src={plain9} alt="header"></img>
          <q>Written by: Fabulous</q>
        </div>
        <div className="speech-section">
          <p>
            <strong>We are passionate about how well make the world a better place and also<br></br>
              looking to change how people look at US.</strong><br></br>
            We work hard to foster an evironment where people can grow both Personally and Professionally.<br></br>
            <br></br>
            Alongside is an internal program for employees and training programs actively supported in acquiring new<br></br>
            knowledge and skills, and coached on applying these in their daily activities.
          </p>
        </div>
        <div className="news-section-4">
          <img src={plain10} alt="header"></img>
          <img src={plain11} alt="header"></img>
          <img src={plain12} alt="header"></img>
        </div>
        <div className="news-section-5">
          <img src={plain13} alt="header"></img>
          <div className="news-section-5-text">
            <p><strong>We are really proud of the work<br></br>
              we've done so far. But if'd like<br></br> to be a part of it, please do join us.</strong></p>
            <br></br>
            <h2>Join us</h2>
            <div className="contact-section">
              <button onClick={() => {
                const contactList = document.querySelector('.contact-list');
                if (contactList.style.display === 'none') {
                  contactList.style.display = 'block';
                } else {
                  contactList.style.display = 'none';
                }
              }}>Contact Us</button>
              <ul className="contact-list" style={{ display: 'none' }}>
                <li>Email: contact@fabulous.com</li>
                <li>Phone: +123456789</li>
                <li>Address: 123 Fabulous St, Creativity City</li>
              </ul>
            </div>
          </div>
          <img src={plain14} alt="header"></img>
        </div>
      </body>
    </div>
  )
};

export default Profile;
