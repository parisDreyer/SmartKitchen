import React from 'react';


class BackupRecipeShow extends React.Component {

    render(){
        
        return (
        <div className="search-results-index-item">
            <h1 className="recipe-show">{this.props.recipe ? this.props.recipe.label : null}</h1>
            <h2 className="recipe-show">Ingredients</h2>
            <ul className="recipe-show">{this.props.recipe && this.props.recipe.ingredients ? this.props.recipe.ingredients.map(el =>el) : null}</ul>
            <h2 className="recipe-show">Instructions</h2>
            <ul className="recipe-show">{this.props.recipe && this.props.recipe.ingredients ? this.props.recipe.directions.map(el => el) : null}</ul>
        </div>
        );
    }


}

export default BackupRecipeShow;