import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                
                <label>   
                    <select onChange={this.props.handleChange}>
                    
                            <option value=""> All </option>
                            {this.props.options.map((selection, i) => 
                            <option key={i} value={selection}> {selection} </option>
                            )}
                    
                    </select>
                </label>
            </div>
        )
    }
}
