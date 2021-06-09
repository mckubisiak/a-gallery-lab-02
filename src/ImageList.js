import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {


    render() {
        let filteredKeyword = this.props.data;
        return (
            <div>
                
                {
                    filteredKeyword.map( (creature, i) => <ImageItem data={creature} key={i} />)
                }
            </div>
        )
    }
}
