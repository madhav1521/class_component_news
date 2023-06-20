import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
    render() {
        const { title, description, imageUrl,newsUrl, newsId } = this.props;
        return (
            <div className='card newsitemComponent'>
                <img src={imageUrl} alt='' loading='lazy'/>
                <div className='card-detail text-success fw-bold'>{title}</div>
                <div className='card-detail'>{description}</div>
                <Link to={newsUrl} target='_blank' className='newsDetail-btn btn-sm' >See Detail</Link>
                {/* <button onClick={newsId} target='_blank' className='newsDetail-btn btn-sm' >Watch Summary</button> */}
            </div>
        )
    }
}

export default NewsItem