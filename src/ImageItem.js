import React, { Component } from 'react'
import  './data'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.data.url} alt={this.props.data.description} />

            </div>
        )
    }
}

/* <img src='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' alt='no ty' /> */