import './RecipeInfoCard.css';
import { Component } from 'react';

class RecipeInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  shortenedLink = (link) => {
    if (link.includes("simplyrecipes.com")) {
      return "Simply Recipes";
    }
    else if (link.includes("bonappetit.com")) {
      return "Bon Appetit";
    }
    else if (link.includes("cafedelites.com")) {
      return "Cafe Delites";
    }
    else {
      return "";
    }
  }

  upper = (title) => {
    return title.split(" ").map((word) => {
      if (word[0]) {
        return word[0].toUpperCase() + word.substring(1);
      } else {
        return word + word.substring(1);
      }
    }).join(" ");
  }

  render () {
    let { title, imgUrl, link } = this.props.recipe;
    console.log(title, imgUrl, link)
    return (
      <button className="recipeInfoCard" onClick={event => this.props.showRecipe(event, this.props.index)}>
        <img src={imgUrl ? imgUrl : "noImage.png"} className="recipeCardImage" alt="" />
        <div className="recipeInfoCardContent">
          <h3>{this.upper(title)}</h3>
          <h4>{this.shortenedLink(link)}</h4>
        </div>
        
      </button>
    );
  }
}

export default RecipeInfoCard;