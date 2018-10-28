import React from 'react';


class BackupRecipeShow extends React.Component {

    render(){
        return (
            <li className="search-results-index-item">
                <a href={`${this.props.recipe.url}`} style={{ display: "table-cell" }} target="_blank">
                    <img className="recipe-img" src={this.props.recipe.image} alt={this.props.recipe.label} />
                    <span className="recipe-label">{this.props.recipe.label}</span>
                </a>
                ingredients
                <ul>{this.props.recipe.ingredients.map(el =>el)}</ul>
                
                <ul>{this.props.recipe.directions.map(el => el)}</ul>
            </li>
        );
    }


}

export default BackupRecipeShow;