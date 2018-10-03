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
 							<div className = "toTheCenter">
 								What is the Flash Name?
 								<WordCard value="BARRY"/>
 								By Nattawat Songsom
 									5935512005
 							</div>
 						</div>
 						);
 			  }
}

export default App;