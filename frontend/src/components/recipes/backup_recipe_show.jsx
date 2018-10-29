import React from 'react';


class BackupRecipeShow extends React.Component {

    render(){
        
        return (
            <li className="search-results-index-item">
                <a href={`recipes/${this.props.match.params.recipeId}`} style={{ display: "table-cell" }} target="_blank">
                    <span className="recipe-label">{this.props.recipe ? this.props.recipe.label : null}</span>
                </a>
                <ul>{this.props.recipe && this.props.recipe.ingredients ? this.props.recipe.ingredients.map(el =>el) : null}</ul>

                <ul>{this.props.recipe && this.props.recipe.ingredients ? this.props.recipe.directions.map(el => el) : null}</ul>
            </li>
        );
    }


}

export default BackupRecipeShow;