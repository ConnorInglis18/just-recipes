import './App.css';
import { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import SearchResults from './SearchResults';
import {exampleRecipes} from "./exampleRecipes";
import RecipeCard from './RecipeCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
      curPage: "Landing",
      recipes: [],
      recipeIndex: 0,
    }
  }
  
  goToLanding = (e) => {
    e.preventDefault();
    this.setState({
      curPage: "Landing"
    }, () => {
      if (this.state.food !== "") {
        document.getElementsByName("searchInputLanding")[0].value = this.state.food;
      }
      window.scrollTo(0,0);
    })
  }

  goToSearch = (e) => {
    e.preventDefault();
    this.setState({
      curPage: "SearchResults"
    });
    window.scrollTo(0,0);
  }

  getRecipes = (e, form) => {
    e.preventDefault();
    if(form.value.length) {
      let food = form.value;
      form.value = "";
      console.log(food);
      let url = "http://127.0.0.1:5000/getRecipes/?q=" + encodeURIComponent(food)
      fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        let recipes = data["hits"];
        this.setState({
          food: food,
          curPage: "SearchResults",
          recipes: recipes
        })
      })
      .catch((error) => console.log(error));
      // fetch food recipes
      // TODO - Replace hardcorded
      // let recipes = exampleRecipes;

    }
  }

  showRecipe = (e, index) => {
    e.preventDefault()
    this.setState({
      curPage: "RecipeCard",
      recipeIndex: index
    })
    window.scrollTo(0,0);
  }

  render () {
    return (
      <div className="App">
          <Header goToLanding={this.goToLanding}/>
          <div id="pageContent">
            {(() => {
            switch (this.state.curPage) {
              case "Landing":
                return <Landing getRecipes={this.getRecipes}/>;
              case "SearchResults":
                return <SearchResults getRecipes={this.getRecipes} food={this.state.food} recipes={this.state.recipes} showRecipe={this.showRecipe}/>;
              case "RecipeCard":
                return <RecipeCard recipe={this.state.recipes[this.state.recipeIndex]} goToSearch={this.goToSearch}/>
              default:
                return <Landing />;
            }
          })()}
          </div>
      </div>
    );
  }
}

export default App;
