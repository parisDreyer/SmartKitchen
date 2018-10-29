import React from 'react';


class BackupRecipeShow extends React.Component {

    constructor(props){
        super(props);
        if (this.props.recipe) sessionStorage["recipe_show"] = JSON.stringify(this.props.recipe);
    }

    rec(){
        return this.props.recipe && this.props.recipe.ingredients ? this.props.recipe : JSON.parse(sessionStorage["recipe_show"]);
    }
    render(){
        return (
        <div className="search-results-index-item">
            <h1 className="recipe-show">{this.rec() ? this.rec().label : null}</h1>
            <h2 className="recipe-show">Ingredients</h2>
            <ul className="recipe-show">{this.rec() && this.rec().ingredients ? this.rec().ingredients.map(el => el) : null}</ul>
            <h2 className="recipe-show">Instructions</h2>
            <ul className="recipe-show">{this.rec() && this.rec().ingredients ? this.rec().directions.map(el => el) : null}</ul>
        </div>
        );
    }


}

export default BackupRecipeShow;