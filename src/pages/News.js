import React, { Component } from 'react'
import NewsItem from '../components/NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tata&from=2023-05-21&sortBy=publishedAt&apiKey=b8820f0f1ea74c07a5a0a8bf0a6e2f7a";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        console.log('pardedData:', parsedData);
    };
    render() {
        return (
            <div className='newsComponent'>News
                <div className='row items'>
                    {this.state.articles.map((item) => {
                        return <div className='col col-md-4' key={item.urlToImage}>
                            <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} />
                        </div>
                    })}
                    <div className='footer-buttons '>
                        <button className='btn btn-primary'>← Previous</button>
                        <button className='btn btn-primary'>Next →</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News