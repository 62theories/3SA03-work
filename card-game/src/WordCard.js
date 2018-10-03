import React, { Component } from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
   let word = given_word.toUpperCase()
   let chars = _.shuffle(Array.from(word))
   return {
     word,
     chars,
     attempt: 1,
     guess: [],
     oldValue: [],
     temp: [],
     completed: false
   }
}


export default class WordCard extends Component {
  constructor(props){
    super(props)
      this.state = {}
    }


  componentWillMount(){
    let data = prepareStateFromWord(this.props.value);
    this.setState({
      word: data.word,
      chars: data.chars,
      attempt: data.attempt,
      guess: data.guess,
      oldValue: data.oldValue,
      temp: data.temp,
      completed: data.completed,
    })
  }


  activationHandler = (c,boool) => {
     let guess = [...this.state.guess, c]

     if(boool === 1)
     {
		this.setState({
       				  guess
     				})

		this.state.temp = this.state.oldValue;
		this.state.oldValue = this.state.guess;
     	if(guess.length === this.state.chars.length){
       		if(this.state.word.match(guess.join('').toString())){
         		this.setState({
           		guess: [],
           		completed: true,
         	  })
         	this.state.chars = Array.from(this.state.word);
       		}
       		else
       		{
         		this.setState({
           		guess: [],
           		attempt: this.state.attempt + 1})
     		}
  		}

  		  


    }
    else if(boool === 0)
    {

    	guess = this.state.oldValue;
    			this.setState({
       				  guess
     				})
    	this.state.oldValue = this.state.temp;

    }
     
}

  render() {
    console.log(this.state);
    return (
        <div>
          { this.state.chars.map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
            activationHandler={this.activationHandler}/>) }
        </div>
      );
    }
}

