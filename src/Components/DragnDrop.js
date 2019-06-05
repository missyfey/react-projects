import React , { Component } from 'react';
import { Link } from '@reach/router';
import { FaAngleDoubleLeft , FaHandPointer} from 'react-icons/fa';
import DnDColumn from './DnDColumn';

class DragnDrop extends Component{
    constructor(){
        super();
        this.state={
            tasks:{
                'task-1':{id: 'task-1' , content: 'take the garbage out'},
                'task-2':{id: 'task-2' , content: 'Whatch the show'},
                'task-3':{id: 'task-3' , content: 'Cook dinner'},
                'task-4':{id: 'task-4' , content: 'Do homework'}
            },
            columns:{
                'column-1':{
                    id: 'column-1',
                    title: 'ToDo',
                    taskIds: ['task-1','task-2','task-3','task-4']
                },
                'column-2':{
                    id: 'column-2',
                    title: 'ToDo Test',
                    taskIds: ['task-1','task-2','task-3','task-4']
                }
            },
            columnOrder:['column-1','column-2']
        }
    }

    goBack(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render(){ 
        return(
        <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">
            <div className="container">
                <div className="projectContainer p-5">
                    <h4 className="darkText py-3 text-center"><FaHandPointer /> Drag and Drop Game</h4>
                    <Link onClick={this.goBack}  to="/projects" >
                        <FaAngleDoubleLeft className="dirIcon"/> 
                        <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                    </Link>
                    <section className="py-3 border-top">
                    <div className="dndBox row">
                        <div className="container d-flex">
                            {this.state.columnOrder.map(item=>{
                                let column = this.state.columns[item];
                                return(
                                    <DnDColumn key={item} column={item}/>
                                )
                            })}
                        </div>
                    </div>
                    </section>
                <div>
                    <p>App Description:</p>
                    <p>This app ... </p>
                </div>
                </div>
            </div>
        </article>
        )
    }
}

export default DragnDrop