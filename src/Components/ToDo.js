import React , { Component } from 'react';
import { Link } from '@reach/router';
import { FaAngleDoubleLeft , FaClipboardList , FaPlus, FaSearch , FaRedo ,FaBrush , FaTimesCircle} from 'react-icons/fa';
import Moment from 'react-moment'; 
import $ from 'jquery/dist/jquery';

class ToDo extends Component{
    constructor(){
        super();
        this.state={
            queryText:'',
            todoList:[],
            initialList:[
                {
                    date: new Date(),
                    noteID: this.newId(),
                    note:'Finish Redux Tutorials'    
                },
                {
                    date: new Date(),
                    noteID: this.newId(),
                    note:'Build 5 more React apps'    
                },
                {
                    date: new Date(),
                    noteID: this.newId(),
                    note: 'Review React Component Lifecycle'    
                },
                {
                    date: new Date(),
                    noteID: this.newId(),
                    note: 'Get a coffee!'    
                }
            ]
        }
        this.handleRemove =this.handleRemove.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount(){
        this.setState({
            todoList: this.state.initialList
        })
    }
    newId(){
        this.uniquId = this.uniquId || 0;
        this.uniquId++;
        return (this.uniquId);
    }
    handleRemove(id){
        this.setState(prevState=>({
            todoList: prevState.todoList.filter(note=> note.noteID !== id)
        }))
    }
    handleClear(e){
        e.preventDefault();
        document.getElementById('searchField').value = '';
        this.setState({
            todoList: []
        })
    }
    handleReset(e){
        e.preventDefault();
        document.getElementById('searchField').value = '';        
        this.setState({
            todoList: this.state.initialList,
            queryText:''
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let myNote = document.getElementById('newNote').value;
        if(myNote !==''){
            this.setState(prevState=>({
                todoList: [
                    ...prevState.todoList ,
                    {
                        date: new Date(),
                        noteID: this.newId(),
                        note: myNote 
                    }
                ]
            }))
            
        }
        document.getElementById('newNote').value = '';
    }
    handlecancel(e){
        e.preventDefault();
        $('#displayToDoForm').animate({height: "0px"});
        $('#displayToDoForm').animate({opacity: "0"},1);
        document.getElementById('newNote').value = '';
    }
    handleSearch(e){
        e.preventDefault();
        let searchFor = (document.getElementById('searchField').value).toLowerCase();
        this.setState({
            queryText: searchFor
        })
    }
    goBack(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    toggleForm(e){
        e.preventDefault();
        let elm = document.getElementById('displayToDoForm');

        if(elm.clientHeight === 0){
            $('#displayToDoForm').animate({opacity: "1"},1);
            $('#displayToDoForm').animate({height: "155px"},300);
        }
        else{
            $('#displayToDoForm').animate({height: "0px"},300);
            $('#displayToDoForm').animate({opacity: "0"},1);
        }        
    }
    render(){    
        var uniquId = 0;    
        var i = 0;
        let todo = this.state.todoList.filter(item => item.note.toLowerCase().includes(this.state.queryText));
    
        return(
            <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">  
                <div className="container">              
                    <div className="projectContainer p-5">
                        <h4 className="darkText py-3 text-center"><FaClipboardList className="h2"/> ToDo List</h4>
                        <Link onClick={this.goBack}  to="/projects" >
                            <FaAngleDoubleLeft className="dirIcon"/> 
                            <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                        </Link>
                        <section className="py-3 border-top">
                        <div className="todoBox row">
                            <div className="col-md-5 col-12 menuBox p-4">
                                <div>
                                    <button className="btn btn-secondary my-1 d-block w-100" onClick={this.toggleForm}><FaPlus className="float-left pt-1"/>Add to List</button>
                                    <div className="displayToDoForm" id="displayToDoForm">
                                        <form className="addToDo">
                                        <div className="form-group text-center">                  
                                            <textarea className="form-control" id="newNote" rows="3" placeholder='Still more to do :)'></textarea>
                                            <button className="btn btn-sm m-1 btn-info" onClick={(e)=> this.handleSubmit(e)}>Submit</button>
                                            <button className="btn btn-sm m-1 btn-danger" onClick={(e)=> this.handlecancel(e)}>Cancel</button>
                                        </div>
                                        <hr />
                                        </form>
                                    </div>
                                    <form className="col-12">
                                    <div className="row">
                                    <label className="sr-only" htmlFor="searchField">Search</label>
                                        <div className="input-group">                                            
                                            <input type="text" className="form-control" id="searchField" placeholder="Search" onKeyUp={(e)=> this.handleSearch(e)}/>
                                            <div className="input-group-prepend">
                                            <span className="curveBtn btn btn-warning ml-1"><FaSearch /></span>
                                            </div>
                                        </div>
                                    <button className="btn btn-danger mt-1 d-block w-100" onClick={(e)=> this.handleReset(e)}><FaRedo className="float-left pt-1"/>Reset List</button>
                                    <button className="btn btn-info mt-1 d-block w-100" onClick={(e)=> this.handleClear(e)}><FaBrush className="float-left pt-1"/>Clear List</button>
                                    </div>
                                    </form>                                    
                                </div>
                            </div>
                            <div className="col-md-7 col-12 recipes p-sm-0 px-lg-2">
                            {todo.map(item =>{     
                                i++;
                                return(
                                    <div className="card recepie-card mb-2" key={item.noteID}>
                                        <div className="card-body py-1">
                                        <div className="row justify-content-end">                                        
                                            <button className="removeBtn px-0" onClick={()=> this.handleRemove(item.noteID)}><FaTimesCircle className="text-danger h5 mt-1" /></button>  
                                        </div>
                                            <p className="card-text">
                                            <span className="h6 font-weight-bold">{i}- </span>
                                            {item.note}
                                            </p>   
                                            <p className="text-right col-12 text-secondary"><small>
                                            <Moment date={item.date} 
                                            parse="YYYY-MM-DD HH:mm:ss"
                                            format="MMM-DD hh:mm a"/>    
                                            </small></p>         
                                        </div>
                                    </div> 
                                )
                            })}               
                            </div>
                        </div>
                        </section>
                    </div>
                </div>
            </article>
        )
    }
}
export default ToDo;