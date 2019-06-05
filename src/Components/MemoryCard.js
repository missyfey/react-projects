import React , { Component } from 'react';
import { FaAngleDoubleLeft , FaRedo} from 'react-icons/fa';
import { GiCardRandom } from 'react-icons/gi';
import { Link } from '@reach/router';
import {shuffle } from 'lodash';

class MemoryCard extends Component{
    constructor(){
        super();
        this.state={
            allImages:['pexels-photo-1.jpeg','pexels-photo-2.jpeg','pexels-photo-3.jpeg','pexels-photo-4.jpeg','pexels-photo-5.jpeg',
            'pexels-photo-6.jpeg','pexels-photo-7.jpeg','pexels-photo-8.jpeg','pexels-photo-9.jpeg','pexels-photo-10.jpeg'],
           level:3,
           theme:'cardgameCandy',
           gameCards:[],
           firstCard:true,
           activeSelect: true,
           firstPick:'',
           matchCards:0,
           seconds:0,
           minutes:0,
           hours:0
        }
        this.handleLevel = this.handleLevel.bind(this);
        this.collectImages = this.collectImages.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.comparePicks = this.comparePicks.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.add = this.add.bind(this);
    }
    // componentWillMount(){
    //     this.setTimer();
    // }
    componentDidMount(){
        let cardNo = this.state.level;
        this.collectImages(cardNo);
    }
    // componentWillUnmount(){
    //     clearInterval(this.intervalId);
    // }
    setTimer(){
            var intervalId = setInterval(this.add , 1000);
    }
    add(){
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        document.getElementById('timer').innerHTML =
            (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
            (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
            (seconds > 9 ? seconds : "0" + seconds);

            seconds ++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
            }
        }
        this.setState({
            seconds: seconds,
            minutes: minutes,
            hours: hours
        })
    }

    collectImages(cardNo){
        //reset the timer
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0
        })
        //make all images visible from previous game
        const allPhotos = document.querySelectorAll(`img[data-photo]`);
        allPhotos.forEach(element => {
                element.classList.remove('invisible');
                element.classList.add('transparent');
                element.parentNode.classList.remove('invisible');
            });
        this.setState({
            firstCard: true,
            activeSelect:true,
            matchCards:0
        })

        let all = this.state.allImages;
        let mixArray = shuffle(all);
        let selectedImages = [];
        let newImg ='';
        for (let i=0 ; i<cardNo ; i++){
            newImg = mixArray.pop();
            selectedImages.push(newImg);
        }
        let duplicateArray = selectedImages.concat(selectedImages);
        let lastShuffle = shuffle(duplicateArray);
        
        this.setState({
            gameCards: lastShuffle
        })        
    }

    handleLevel(e){
        e.preventDefault();
        let cardNo = e.target.value;
        this.setState({
            level: cardNo
        })
        this.collectImages(cardNo);
    }
    changeTheme(e){
        //it finds th theme folder, not the same as selected image name
        e.preventDefault();
        let src = e.target.src;
        let len = src.length;
        let startPos = src.indexOf('/img/');
        let selectedTheme = src.substring(startPos + 5 ,len - 7);
        this.setState({
            theme: selectedTheme
        })
        this.collectImages(this.state.level);
    }

    comparePicks(e){
        e.preventDefault();        
        if(this.state.activeSelect){
            //flip selected card
            e.target.classList.remove('transparent');
            e.target.classList.add('flipped');
            if(this.state.firstCard){
                this.setState({
                    firstPick : (e.target.dataset.photo).trim(),
                    firstCard: false
                })
            }else{
                let secondPick = (e.target.dataset.photo).trim();    
                this.setState({
                    firstCard: true,
                    activeSelect: false
                })
                //check to see if cards are the same
                if(this.state.firstPick === secondPick){
                    //same cards - add invisible class to both picks

                    setTimeout(()=>{
                        const panel = document.querySelectorAll(`img[data-photo='${secondPick}']`);
                        panel.forEach(element => {
                        element.parentNode.classList.add('invisible');
                        element.classList.add('invisible');
                    });
                    this.setState({
                        firstCard: true,
                        activeSelect:true,
                        matchCards: this.state.matchCards +1
                    })
                    if(this.state.matchCards == this.state.level){
                        let timer = 'good job! you won the game in '+ 
                        document.getElementById('timer').innerHTML;
                        alert(timer)

                        this.collectImages(this.state.level)
                     }  
                    },1000); 
                }
                else{
                    //different cards - set timeout and flip cards back
                    setTimeout(() => {
                        const flippedCards = document.querySelectorAll('.flipped');
                        flippedCards.forEach(element => {
                            element.classList.remove('flipped');
                            element.classList.add('transparent');
                        });
                        this.setState({
                            firstCard:true,
                            activeSelect:true
                        })
                    }, 1000);
                }
            }
        }
    }
    
    render(){
        let id = 0;       
        return(
            <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">  
                <div className="container">
                    <div className="pb-2">
                        <p className="font-weight-bold">App Description:</p>
                        <p>In this game you can choose to play in easy, medium or hard level. And can choose the theme for game.<br/>
                            any time you start a new game it will shuffle from an array and pick random cards from selected theme.
                        </p>
                    </div>            
                    <div className="projectContainer p-5">
                        <h4 className="darkText py-3 text-center"><GiCardRandom className="h1"/> Memory card Game</h4>
                        <Link onClick={this.goBack}  to="/projects" >
                            <FaAngleDoubleLeft className="dirIcon"/> 
                            <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                        </Link>                       
                        
                        <section className="py-3 border-top">
                            <div className="settingBox d-flex row">

                            <div className="col-sm-12 col-md-9 d-flex mb-sm-2">
                            <small className="cursor mr-auto" onClick={()=> this.collectImages(this.state.level)}>New game <FaRedo className="h4"/></small>
                                <div className="d-flex"><small>Select Theme:</small>
                                    <div onClick={(e)=> this.changeTheme(e)} className="cursor cardGameBg mx-1">
                                        <img src="/img/cardgameCandy_tn.jpg"/>
                                    </div>
                                    <div onClick={(e)=> this.changeTheme(e)} className="cursor cardGameBg mx-1">
                                        <img src="/img/cardgameFlower_tn.jpg" />
                                    </div>
                                    <div onClick={(e)=> this.changeTheme(e)} className="cursor cardGameBg mx-1">
                                        <img src="/img/cardgameCity_tn.jpg" />
                                    </div>
                                </div>
                            </div>
                            
                            <form className="col-sm-12 col-md-3">
                            {/* <label htmlFor="gameLevel">Select game level</label> */}
                                <select className="form-control form-control-sm" id="gameLevel" 
                                    onChange={(e)=> this.handleLevel(e)}>
                                    <option value='3'>Easy-6 cards</option>
                                    <option value='6'>Medium-12 cards</option>
                                    <option value='10'>Hard-20 cards</option>
                                </select>
                                <span className="float-left h6 w-25 py-2" id="timer"></span><br />
                            </form>
                            
                            </div>
                            <div className="col-12 py-3">
                                <div className="row d-flex justify-content-start" id="cardPanel"> 
                                    {this.state.gameCards.map(image=>{
                                        id++;
                                        return(
                                            <div className="cardHolder m-2">                                 
                                                <img onClick={(e)=> this.comparePicks(e)} key={id} 
                                                data-photo={image} className="memoryCard transparent" src={`/img/${this.state.theme}/${image}`} />
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
export default MemoryCard;