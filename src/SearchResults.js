import './SearchResults.css';
import { Component } from 'react';
import RecipeInfoCard from "./RecipeInfoCard";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    document.getElementsByName("searchInput")[0].value = this.props.food;
  }

  render () {
    return (
      <div className="searchResultsPage">
          <div className="searchBar">
            <form className="searchForm" onSubmit={event => this.props.getRecipes(event, document.getElementsByName("searchInput")[0])}>
              <input type="text" placeholder="Search Recipes..." name="searchInput" className="searchInput"/>
            </form>
          </div>
          <div className="searchResults">
            {this.props.recipes.length === 0 ? <h1>No Results Found</h1> : <h1></h1>}
            {this.props.recipes.map((recipe, index) => {
              return (
                <RecipeInfoCard key={recipe["recipeID"]} recipe={recipe} index={index} showRecipe={this.props.showRecipe}/>
              )
            })}
          </div>
      </div>
    );
  }
}

export default SearchResults;