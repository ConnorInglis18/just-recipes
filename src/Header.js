import './Header.css';
import { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <section>
          <button className="title" onClick={this.props.goToLanding}>JUST RECIPES</button>
          <div className="selectors">
            <button className="selector">View All Recipes</button>
            <button className="selector">Ingredients Tool</button>
          </div>
          <div className="contact">
             <button className="contactButton">Contact Us</button>
          </div>
      </section>
    );
  }
}

export default Header;
