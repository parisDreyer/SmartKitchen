import React from 'react';
import "../../css/footer.css";


class Footer extends React.Component {
  render() {
    return <div className="footer">
        <div className="sm">
          <div className="text">
            <i className="fas fa-paper-plane" />
            Navigation:
          </div>
          <a href="/" rel="noopener noreferrer" >
            <i className="fas fa-home" />
            Home
          </a>
          <a href="#/search" rel="noopener noreferrer" >
            <i className="fas fa-search" />
            Search
          </a>
          <a href="#/signup" rel="noopener noreferrer" >
            <i className="fas fa-door-open" />
            Signup
          </a>
          <a href="#/signup" rel="noopener noreferrer" >
            <i className="fas fa-user-alt" />
            Sign In
          </a>
        </div>

        <div className="sm">
          <div className="text">
            <i className="fas fa-address-card" />
            Follow us! We're friendly:
          </div>
          <a href="https://github.com/AmandaMitchell707" rel="noopener noreferrer" >
            <i className="fab fa-github" />
            Amanda Mitchell
          </a>

          <a href="https://github.com/cyippiy" rel="noopener noreferrer" >
            <i className="fab fa-github" />
            Chris Yip
          </a>

          <a href="https://github.com/parisDreyer" rel="noopener noreferrer" >
            <i className="fab fa-github" />
            Luke Dreyer
          </a>

          <a href="https://github.com/nathashas1" rel="noopener noreferrer" >
            <i className="fab fa-github" />
            Nathasha Surendran
          </a>
          <div id="edamam-badge" data-color="white" />
        </div>
      </div>;
  }
}

export default Footer;