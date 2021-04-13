import veggiesUncropped from './images/veggiesUncropped.jpeg';
import wideYellowBackground from './images/wideYellowBackground.png'
import './Landing.css';
import { Component } from 'react';

class Landing extends Component {
  render () {
    return (
      <div>
        <div className="searchLanding">
          <img src={veggiesUncropped} className="food" alt="" />
          <form className="searchFormLanding" onSubmit={event => this.props.getRecipes(event, document.getElementsByName("searchInputLanding")[0])}>
            <input type="text" placeholder="Search Recipes..." name="searchInputLanding" className="searchInput" />
          </form>
        </div>
        <hr/>
        <div className="about">
          <div className="hello">
            <p className="leftText">Who are we?</p>
            <p className="rightText">
              Just Recipes gives you everything you want from a recipe, with nothing extra <br />
              <br />
              -Ingredients Lists<br />
              -Preperation Methods<br />
              -Cook Time<br />
              <br />
              No Backstory, No Life Journeys, <br />
              Just Recipes
          </p>
          </div>
          <img src={wideYellowBackground} className="yellowBackground" alt=""/>
        </div>
      </div>
    );
  }
}

export default Landing;
