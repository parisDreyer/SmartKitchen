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
          <a href="/">
            <i className="fas fa-home" />
            Home
          </a>
          <a href="#/search">
            <i className="fas fa-search" />
            Search
          </a>
          <a href="#/signup">
            <i class="fas fa-door-open" />
            Signup
          </a>
          <a href="#/signup">
            <i class="fas fa-user-alt" />
            Sign In
          </a>
        </div>

        <div className="sm">
          <div className="text">Follow us! We're friendly:</div>
          <a href="https://github.com/AmandaMitchell707">
            <i className="fab fa-github" />
            Amanda Mitchell
          </a>

          <a href="https://github.com/cyippiy">
            <i className="fab fa-github" />
            Chris Yip
          </a>

          <a href="https://github.com/parisDreyer">
            <i className="fab fa-github" />
            Luke Dreyer
          </a>

          <a href="https://github.com/nathashas1">
            <i className="fab fa-github" />
            Nathasha Surendran
          </a>
          <div id="edamam-badge" data-color="white" />
        </div>
      </div>;
  }
}

export default Footer;