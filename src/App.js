import Header from './Header';
import ImageList from './ImageList';
import './App.css';
import images from './data.js';


import React, { Component } from 'react'
import Dropdown from './Dropdown';

export default class App extends Component {
  state = {
    filterKeyword: '',
    // filterHorns: ''
    
}

handleKeywordChange = (e) => {
    this.setState({ filterKeyword: e.target.value })
}
// handleHornsChange = (e) => {
//     this.setState({ filterHorns: e.target.value })
// }
  render() {
    let filteredKeyword = images;

    
    if (this.state.filterKeyword) {
      filteredKeyword = images.filter(creature => creature.keyword === this.state.filterKeyword) 
    }
    
    const filteredCreature = Array.from(new Set(images.map(creature =>creature.keyword)))
    console.log(filteredCreature);
    return (
      <div>
        
          <Header />
          <Dropdown 
          handleChange={this.handleKeywordChange} 
          options={filteredCreature} />


      <ImageList data={filteredKeyword} />
      </div>
    )
  }
}




