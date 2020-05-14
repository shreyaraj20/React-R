import React, { Component } from "react";
import "./styles.css";
import Form from "./components/Form";
// const url="https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

const API_KEY = "4d827db02a22de97e0e9144e741381ce";

class App extends Component {
  getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}
export default App;
