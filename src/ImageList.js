import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {


    render() {
        let filteredKeyword = this.props.data;
        
        
        // if (this.state.filterKeyword) {
        //     filteredKeyword = this.props.data.filter(creature => creature.keyword === this.state.filterKeyword)
        // }
        console.log(filteredKeyword);
        return (
            <div>
                
                {
                    filteredKeyword.map( (creature, i) => <ImageItem data={creature} key={i} />)
                }
            </div>
        )
    }
}
