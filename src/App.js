import Header from './Header';
import ImageList from './ImageList';
import './App.css';
import images from './data.js';
import React, { Component } from 'react'
import Dropdown from './Dropdown';

export default class App extends Component {
  state = {
    filterKeyword: '',
    filterHorns: ''
}

handleKeywordChange = (e) => {
    this.setState({ filterKeyword: e.target.value })
}
handleHornsChange = (e) => {
    this.setState({ filterHorns: e.target.value })
}

  render() {
    let filteredKeyword = images;

    if (this.state.filterKeyword) {
      filteredKeyword = filteredKeyword.filter(creature => creature.keyword === this.state.filterKeyword) 
    }

    if (this.state.filterHorns) {
      filteredKeyword = filteredKeyword.filter(creature => creature.horns === +this.state.filterHorns) 
    }

    const filteredCreature = Array.from(new Set(images.map(creature =>creature.keyword)))
    const filteredHorns = Array.from(new Set(images.map(creature =>creature.horns)))
    console.log(this.state.filterHorns);
    return (
      <div>
        
          <Header />
          Creature type:
          <Dropdown 
          handleChange={this.handleKeywordChange} 
          options={filteredCreature} />
          Horns:
          <Dropdown 
          handleChange={this.handleHornsChange} 
          options={filteredHorns} />


      <ImageList data={filteredKeyword} />
      </div>
    )
  }
}
