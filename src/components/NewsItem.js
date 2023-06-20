import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
    render() {
        const { title, description, imageUrl,newsUrl } = this.props;
        return (
            <div className='card newsitemComponent'>
                <img src={imageUrl} alt='' />
                <div className='card-detail text-success fw-bold'>{title}</div>
                <div className='card-detail'>{description}</div>
                <Link to={newsUrl} target='_blank' className='newsDetail-btn btn-sm' >See Detail</Link>
            </div>
        )
    }
}

export default NewsItem