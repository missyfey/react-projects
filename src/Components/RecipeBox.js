import React , { Component } from 'react';
import { FaUtensils } from "react-icons/fa";
import Recipe from './Recipe';
import { Link } from '@reach/router';
import { FaAngleDoubleLeft} from 'react-icons/fa';

class RecipeBox extends Component{
    
    constructor(){
        super();
        this.state={
            recipes:[],
            lastIndex: 2,
            editMode: false,
            editingId:'',
            singleItem:[]
        }
        this.showAll = this.showAll.bind(this);
        this.removeAll =this.removeAll.bind(this);
        this.showForm =this.showForm.bind(this);
        this.submitRecepie = this.submitRecepie.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.uniqueId = this.uniqueId.bind(this);
        this.showSingle = this.showSingle.bind(this);
    }

    componentDidMount(){
        // Set initial recipes for first page load:
        var initialRecipes = [{id:0 , name: 'Beef Wellington', description:`- 400g flat cap mushrooms, roughly chopped \n- sea salt and freshly ground black pepper\n- olive oil, for cooking\n- 750g piece of prime beef fillet\n- 1-2tbsp English mustard\n- 6-8 slices of Parma ham\n- 500g ready-made puff pastry\n- flour, to dust\n- 2 egg yolks, beaten`},
                                {id:1 ,name: 'Kimchi Jjigae',description: '- 1 pound kimchi, cut into bite size pieces\n- ¼ cup kimchi brine\n- ½ pound pork shoulder (or pork belly)\n- ½ package of tofu (optional), sliced into ½ inch thick bite size pieces\n- 1 teaspoon salt\n- 2 teaspoons sugar\n- 2 teaspoons gochugaru (Korean hot pepper flakes)\n- 1 tablespoon gochujang (hot pepper paste)\n- 1 teaspoon sesame oil\n- 2 cups of anchovy stock (or chicken or beef broth)\n'},
                                {id:2 ,name:'Cajun Pasta', description:'- 1 pound fettuccine\n- About 3 teaspoons Cajun spice mix\n- 3 whole boneless, skinless chicken breasts, cut into cubes\n- 2 tablespoons butter\n- 2 tablespoons olive oil\n- 3 cloves garlic, minced\n- 1 whole green bell pepper, seeded and sliced\n- 1 whole red bell pepper, seeded and sliced\n- 1/2 large red onion, sliced\n- Salt\n- 4 whole Roma tomatoes, diced\n- 2 cups low-sodium chicken broth\n- 1/2 cups white wine\n- 1 cup heavy cream\n- Cayenne pepper, for sprinkling\n- Freshly ground black pepper\n- Chopped fresh parsley, for garnish\n'}
                                ];
        this.setState({
            recipes: initialRecipes
        })
    }

    removeAll(){
        this.setState({
            recipes: []
        })
    }

    showAll(){
        document.getElementById('displayList').classList.remove('hidden');
        document.getElementById('displayForm').classList.add('hidden');
    }

    showForm(){
        document.getElementById('displayForm').classList.remove('hidden');
        document.getElementById('displayList').classList.add('hidden');
    }

    submitRecepie(e){
        e.preventDefault();
        
        var rec = document.getElementById('name').value;
        var ing = document.getElementById('ingredient').value;
        if(rec !=='' || ing !==''){

        if(this.state.editMode === true){
            var editedId = this.state.editingId;
            var list = this.state.recipes;
            let newList = list.filter(item=>{
                if(item.id !== editedId){return true}
            }).concat({'name': rec, 'description': ing, 'id': editedId})

            this.setState({
                recipes: newList
            })
        }else{
            this.setState(prevState=>({
            
                recipes:[
                    ...prevState.recipes,
                    {
                        name: rec,
                        description: ing,
                        id: this.uniqueId()
                    }
                ]                
            }))
        }
        }

        document.getElementById('name').value = '';
        document.getElementById('ingredient').value = '';
        document.getElementById('displayList').classList.remove('hidden');
        document.getElementById('displayForm').classList.add('hidden');
        document.getElementById('displaySingle').classList.add('hidden');
        this.setState({
            editMode: false
        })
    }
    delete(id){
        let list = this.state.recipes;
        let newList = list.filter(item=>{
            if(item.id !== id){
                return true
            }
        })
        this.setState({
            recipes: newList
        })
    }
    edit(id){
        this.setState({
            editMode: true,
            editingId: id
        })
        
        let list = this.state.recipes;
        let toBeEdited = list.filter(item=>{
            if(item.id === id){ return true}
        })
        document.getElementById('name').value = toBeEdited[0].name;
        document.getElementById('ingredient').value = toBeEdited[0].description;

        document.getElementById('displayForm').classList.remove('hidden');
        document.getElementById('displayList').classList.add('hidden');
        document.getElementById('displaySingle').classList.add('hidden');
    }

    uniqueId(){
        let newId = this.state.lastIndex;
        let addedId = Number(newId) + 1;

        this.setState({
            lastIndex: addedId
        })
        return addedId
    }
    showSingle(e){
        console.log(e.target.id);
        document.getElementById('displayForm').classList.add('hidden');
        document.getElementById('displayList').classList.add('hidden');
        document.getElementById('displaySingle').classList.remove('hidden');
        let list = this.state.recipes;
        let single = list.filter(item=>{
            if(item.id === e.target.id){ return true}
        })
        console.log(single)
        this.setState({
            singleItem: single
        })
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
                        <h4 className="darkText py-3 text-center"><FaUtensils className="h2"/> Recipe Box</h4>
                        <Link onClick={this.goBack}  to="/projects" >
                            <FaAngleDoubleLeft className="dirIcon"/> 
                            <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                        </Link>
                        <section className="py-3 border-top">
                        <div className="recipeBox row">
                            <div className="col-md-3 col-12 menuBox p-4">
                                <div>
                                    <button className="btn btn-info my-1 d-block w-100" onClick={this.showForm}>Add a new Recipe</button>
                                    <button className="btn btn-success my-1 d-block w-100" onClick={this.showAll}>Show All recipes</button>
                                    <button className="btn btn-danger my-1 d-block w-100" onClick={this.removeAll}>Remove All recipes</button>
                                </div>
                                <div>
                                    <h4 className="pt-md-5 pt-sm-2">Recipe List</h4>
                                    {this.state.recipes.map(item=>{
                                        return(
                                            <button key={item.id} id={item.id} className="btn btn-warning my-1 d-block w-100" onClick={this.showSingle}>{item.name}</button>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-md-9 col-12 recipes p-sm-0 px-lg-2">
                        <div id="displayList" className=''>
                            {this.state.recipes.map(item=>{
                                return <Recipe key={item.description} recipe={item}
                                delete={this.delete} edit={this.edit} id={item.id}/>
                            })}
                        </div>
                        <div id="displaySingle" className='hidden'>
                        {this.state.singleItem.map(item=>{
                                return <Recipe key={item.description} recipe={item}
                                delete={this.delete} edit={this.edit} id={item.id}/>
                            })}
                        </div>
                        <div className="hidden" id="displayForm">
                        <form className="addRecepieForm">
                        <h4 className="pt-5">Add new Yummy food recipe...</h4>
                        <div className="form-group">
                            <input className="form-control" id="name" type="text" placeholder="Recepie" />                        
                            <textarea className="form-control" id="ingredient" rows="3" placeholder='Ingredients'></textarea>
                            <button className="btn mr-1 btn-sm mt-2 btn-info" onClick={this.submitRecepie}>Submit Recipe</button>
                            <button className="btn mt-2 btn-sm btn-danger" onClick={this.showAll}>Cancel recipes</button>
                        </div>
                        </form>
                        </div>
                        </div>
                        </div>
                        </section>
                    </div>
                </div>
            </article>
        )
    }
}

export default RecipeBox