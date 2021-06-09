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
    // let render = images;
    
        
    if (this.state.filterKeyword) {
        filteredKeyword = images.filter(creature => creature.keyword === this.state.filterKeyword) 
        // render = filteredKeyword.filter(creature => creature.horns === this.state.filterHorns)

        console.log(filteredKeyword)
    }

    return (
      <div>
        
          <Header />
          <Dropdown handleChange={this.handleKeywordChange}/>
          {/* Number of Keyword 
                <label>
                    <select onChange={this.handleKeywordChange}>
                    
                            <option value=""> All </option>
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
                </label> */}


              {/* Number of horns
                <label>
                    <select onChange={this.handleHornsChange}>                     
                    <option value= ''> All </option>
                    <option value= {1} > 1 </option>
                    <option value= {2}> 2 </option>
                    <option value= {3}> 3 </option>
                    <option value= {100} > too many </option>                           
                    </select>
                </label>
                 */}
      <ImageList data={filteredKeyword} />
      </div>
    )
  }
}




