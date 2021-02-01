import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="header clearfix">
      <header className="header clearfix">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 d-flex justify-content-center">
              <img
                class="profile-image img-responsive"
                src="https://res.cloudinary.com/dgv2ytq4r/image/upload/v1582031882/seun_ons3vd.jpg"
                alt="Akanni David's image"
              />
            </div>
            <div className="col-sm-12 col-md-8 mr-md-auto d-flex flex-column align-items-center align-items-md-start align-items-sm-center profile_name">
              <h1 className="name" id="header">
                <strong>Blessed Domininc</strong>
              </h1>
              <h2>Frontend Engineer</h2>
              <ul className="social list-inline">
                <li>
                  <a
                    href="https://twitter.com/i_am_mylo"
                    title="Twitter"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/akanniseun"
                    title="Linkedin"
                    rel="noopener"
                    aria-label="linkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MyloCarson"
                    title="GitHub"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <i class="fa fa-github-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@akannidavidseun"
                    title="Medium"
                    rel="noopener"
                    aria-label="Medium"
                  >
                    <i className="fa fa-medium"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://articles.seunakanni.me"
                    title="Blog"
                    rel="noopener"
                    aria-label="My Blog"
                  >
                    <i className="fa fa-newspaper-o"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/i_am_mylo"
                    title="Instagram"
                    rel="noopener"
                    aria-label="Instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/files/David Akanni Resume.pdf"
                    title="Resume"
                    rel="noopener"
                    aria-label="Resume"
                  >
                    <i className="fa fa-file"></i>
                  </a>
                </li>
                <li style={{ opacity: '0' }}>
                  <a href="https://www.twine.fm/iammylo">
                    <i class="fa fa-file"></i>
                  </a>
                </li>
              </ul>
              <div className="align-middle btn-wrapper">
                <button className="btn btn-secondary">
                  <a href="mailto:akannidavidseun@gmail.com?Subject=Mail%20to%20say%20hi.">
                    Let's grab coffee.<i class="fa fa-paper-plane"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
