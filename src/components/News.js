import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        }
    }
    async componentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=tata&from=2023-05-20&sortBy=publishedAt&apiKey=b8820f0f1ea74c07a5a0a8bf0a6e2f7a";
        const data = await fetch(url);
        const parsedData = await data.json()
        console.log('cdm' , parsedData);
        this.setState({articles:parsedData.articles})
    }
    prevPageHandler = async () => {
        const url = "https://newsapi.org/v2/everything?q=tata&from=2023-05-20&sortBy=publishedAt&apiKey=b8820f0f1ea74c07a5a0a8bf0a6e2f7a";
        const data = await fetch(url);
        const parsedData = await data.json()
        console.log('cdm' , parsedData);
        this.setState({
            articles:parsedData.articles,
            state:this.state - 1
        })
    }
    nextPageHandler = async () => {
        const url = "https://newsapi.org/v2/everything?q=tata&from=2023-05-20&sortBy=publishedAt&apiKey=b8820f0f1ea74c07a5a0a8bf0a6e2f7a";
        const data = await fetch(url);
        const parsedData = await data.json()
        console.log('cdm' , parsedData);
        this.setState({
            articles:parsedData.articles,
            state:this.state + 1
        })
    }
    render() {
        return (
            <div className='newsComponent'>News
                <div className='row items'>
                    {this.state.articles.map((item) => {
                        return <div className='col col-md-4 boxes' key={item.urlToImage}>
                            <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News