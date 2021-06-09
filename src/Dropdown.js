import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                
                <label>  Number of Keyword
                    <select onChange={this.props.handleChange}>
                    
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
                </label>

            </div>
        )
    }
}

