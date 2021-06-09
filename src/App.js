import Header from './Header';
import ImageList from './ImageList';
import './App.css';
import images from './data.js';


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    filterKeyword: ''
}

handleHornChange = (e) => {
    this.setState({ filterKeyword: e.target.value })
}
  render() {
    let filteredKeyword = images;
        
        
    if (this.state.filterKeyword) {
        filteredKeyword = images.filter(creature => creature.keyword === this.state.filterKeyword)
    }
    return (
      <div>
        
          <Header />
          Number of Keyword 
                <label>
                    <select onChange={this.handleHornChange}>
                    
                            <option value="narwhal"> narwhal </option>
                            <option value="rhino"> rhino </option>
                            <option value= "unicorn"> unicorn </option>
                            <option value= "unilego"> unilego </option>
                            <option value= "triceratops"> triceratops </option>
                            <option value= "markhor"> markhor </option>
                            <option value= "mouflon"> mouflon </option>
                            <option value= "addax"> addax </option>
                            <option value= "chameleon"> chameleon </option>
                            <option value= "lizard"> lizard </option>
                            <option value= "dragon"> dragon </option> 
                            
                    </select>
                </label>
      <ImageList data={filteredKeyword} />
      </div>
    )
  }
}




/* 
<option value= ''> All </option>
                    <option value= {1} > 1 </option>
                    <option value= {2}> 2 </option>
                    <option value= {3}> 3 </option>
                    <option value= {100} > too many </option>*/

