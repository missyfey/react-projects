import React , { Component } from 'react';
import DnDTasks from './DnDTasks';

class DnDColumn extends Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <div className="col-4 ">
            <h3>{this.props.column}</h3>
            {/* <DnDTasks /> */}
        </div>
    )
}
}
export default DnDColumn;