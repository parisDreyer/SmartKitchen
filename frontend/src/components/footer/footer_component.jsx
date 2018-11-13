import React from 'react';
import "../../css/footer.css";


class Footer extends React.Component {
  render() {
    return <div className="footer">
      <div className="text">Follow us! We're friendly:</div>
      <div className="sm">
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
        <div id="edamam-badge" data-color="white"></div>
      </div>
    </div>;
  }
}

export default Footer;