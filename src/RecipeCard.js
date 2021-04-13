import './RecipeCard.css';
import { Component } from 'react';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  shortenedLink = (link) => {
    if (link.includes("simplyrecipes.com")) {
      return " Simply Recipes";
    }
    else if (link.includes("bonappetit.com")) {
      return " Bon Appetit";
    }
    else if (link.includes("cafedelites.com")) {
      return " Cafe Delites";
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
    // let { title, image, author, link, ingredients, instructions, cookTime, prepTime } = this.props.recipe;
    let { title, imgUrl, link, ingredients, instructions} = this.props.recipe;
    console.log(JSON.parse(ingredients))
    return (
      <div className="RecipeCard">
        <div className="topBar">
          <div className="topLeft">
            <h1>{this.upper(title)}</h1>
            <div className="authorInfo">
              {/* <p>{author} - </p> */}
              <a href={link} target="_blank" rel="noreferrer">{this.shortenedLink(link)}</a>
            </div>
          </div>
          <button onClick={this.props.goToSearch} className="backButton">Back To Search</button>
        </div>
        <div className="content">
          <div className="leftPanel">
             {imgUrl ? <img className="recipeImage" src={imgUrl} alt=""/> : <div></div>}
             <h2>Ingredients</h2>
             <ol>
              {JSON.parse(ingredients).map((ingredient, index) => {
              return (
                <li key={index + ingredient}>{ingredient}</li>
              )
             })}
             </ol>
          </div>
          <div className="rightPanel">
            <h2>Instructions</h2>
            <ol>
             {JSON.parse(instructions).map((instruction, index) => {
              return (
                <li key={index + instruction}>{instruction}</li>
              )
             })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
