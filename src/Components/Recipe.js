import React , { Component } from 'react';

class Recipe extends Component{
    render(){
        let rec = this.props.recipe;
        return(
        <div className="card recepie-card mb-2">
            <div className="card-header">
                <p><b>{rec.name}</b></p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Ingredients:</h5>
                <p className="card-text">{rec.description}</p>
                <button className="btn btn-sm btn-danger mt-2 mr-1" onClick={(e)=> this.props.delete(rec.id)}>Delete this Recipe</button> 
                <button className="btn btn-sm btn-success mt-2" onClick={(e)=> this.props.edit(rec.id)}>Edit this Recipe</button>                
            </div>
        </div>
        )
    }
}
export default Recipe