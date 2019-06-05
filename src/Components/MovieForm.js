import React , { Component } from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import SearchResult from './SearchResult';

class MovieForm extends Component{
    constructor(){
        super();
        this.state = {
             genre: [], //Array, selected genres
             genreList:[{}],//object: name & integer
             genreId:[], //integer ID
             searchedMovie:[]
            }

    this.getGenre = this.getGenre.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount(){
        fetch('genres.json')
        .then(response=> response.json())
        .then(result=>{
            this.setState({
                genreList: result.genres
            })
        })
    }
    handleSearch(query){
         if(query == ''){
             document.getElementById('result').classList.add('noDisplay');
         }else if(query != ''){
            document.getElementById('result').classList.remove('noDisplay');
            document.getElementById('result').classList.add('formResults');
        }
        var key = "2d6a164a44aa91c01724f7aa944b39bf"
        var url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
        
        fetch(url)
        .then(response => {
            if (response.status !== 200) {
              console.log('Error: ' + response.status)
              return
            }    
            response.json().then(data => {
              const movie = data.results
              console.log(movie)
              this.setState({
                   searchedMovie: data.results
                })
            })    
          })
          .catch(err => {
            console.log('Fetch Error :-S', err)
          })
    }
    getGenre = (event) => {  
        let finalArr=[];
        let object = this.state.genreList;
        let names = event.target.value;
        names.map(item=>{
            let searchword = item;
            let tempArr = object.filter(ob => {
                if(ob.name === searchword){
                    return ob
                }
            })
            finalArr.push(tempArr);
        })
        let idArray = finalArr.map(item=>{
            return item[0].id
        })

        this.setState({
            genre: [ ...event.target.value ],
            genreId: idArray
        });

        this.handleSort(this.props.year, this.props.sort,idArray);
    }

    handleSort(year,orderBy,genre){
        this.props.handleSort(year,orderBy,genre);
    }
    render(){
        
        let genres =this.state.genreList.map(item=>{
            return(item.name);
        })

        return(
            <div >                
                <form className="movieFormContainer">
                    <div className="form-row">
                         <div className="form-group col-md-1">
                            <label htmlFor="inputYear">Year</label>
                            <select id="inputYear" className="form-control form-control-sm" onChange={(e)=>this.handleSort(e.target.value,this.props.sort,this.props.genre)}>
                            <option value="2019" >2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                        </select>
                        </div>
                        <div className="form-group col-md-3">
                        <label htmlFor="inputSortBy">SortBy</label>
                        <select id="inputSortBy" className="form-control form-control-sm" onChange={(e)=>this.handleSort(this.props.year,e.target.value,this.props.genre)}>
                           <option value="popularity.desc">Popularity Descending</option>
                            <option value="popularity.asc">Popularity Ascending</option>
                            <option value="vote_average.desc" >Rating Descending</option>
                            <option value="vote_average.asc">Rating Ascending</option>
                            <option value="Release_Date.desc">Release Date Descending</option>
                            <option value="Release_Date.asc">Release Date Ascending</option>  
                        </select>
                        </div>
                {/* Have to attach it to page to get the css: 
                <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css"></link> */}
                        <div className="form-group col-md-4 example-wrapper">
                        <label htmlFor="inputGenre">Genre</label>
                            <MultiSelect id="inputGenre"
                                placeholder="Filter by genres..."
                                data={genres}
                                onChange={this.getGenre}
                                value={this.state.genre}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputKeywords">Keywords</label>
                            <input type="text" className="form-control form-control-sm" id="inputKeywords" 
                            placeholder="Filter by keywords..." onChange={(e)=>this.handleSearch(e.target.value)}/>
                            <ul id="result" className="noDisplay">
                                {this.state.searchedMovie.map(item=>{
                                    return(
                                        <SearchResult movie={item}/>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    </form>
            </div>
        )
    }
}
export default MovieForm