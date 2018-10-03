import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Hello";
class App extends Component 
{
	 render() {
 				return (
 						<div>
 							<WordCard value="BARRY"/>
 						</div>
 						);
 			  }
}

export default App;