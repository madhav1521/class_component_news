import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Bloomberg",
            "title": "Population boom spurs hunt for stock market winners in India",
            "description": "The milestone of being the most populous nation serves as a reminder of the growth potential for Indiaâs $3.4 trillion stock market â which recently reclaimed its spot as the worldâs fifth largest â as it takes a bigger pie in global manufacturing and…",
            "url": "https://www.moneycontrol.com/news/business/economy/population-boom-spurs-hunt-for-stock-market-winners-in-india-10814281.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/06/4-652x435.jpg",
            "publishedAt": "2023-06-18T04:17:59Z",
            "content": "Thronged by hundreds of people, including some Bollywood celebrities, Tim Cooks excitement was palpable as the chief executive officer of Apple Inc. officially opened its first company-owned store in… [+6904 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "How the right policy mix & economic transformation can create market winners in India",
            "description": "India is at a “tipping point,” he went on to say on a call with analysts after his visit. It was that same month when India also earned a new title as the world’s most populous nation, burnishing the appeal of sectors that cater to a burgeoning middle class a…",
            "url": "https://economictimes.indiatimes.com/news/economy/policy/how-the-right-policy-mix-economic-transformation-can-create-market-winners-in-india/articleshow/101077451.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101077739,width-1070,height-580,imgsize-945430,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-06-18T02:59:39Z",
            "content": "Thronged by hundreds of people, including some Bollywood celebrities, Tim Cooks excitement was palpable as the chief executive officer of Apple Inc. officially opened its first company-owned store in… [+6953 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Population Boom Spurs Hunt For Stock Market Winners In India",
            "description": "Thronged by hundreds of people, including some Bollywood celebrities, Tim Cook's excitement was palpable as the chief executive officer of Apple Inc. officially opened its first company-owned store in India in April.",
            "url": "https://www.ndtv.com/india-news/population-boom-spurs-hunt-for-stock-market-winners-in-india-4130669",
            "urlToImage": "https://c.ndtvimg.com/2023-06/oc2s00h_india-population-bloomberg_625x300_18_June_23.jpg",
            "publishedAt": "2023-06-18T01:34:52Z",
            "content": "Thronged by hundreds of people, including some Bollywood celebrities, Tim Cook's excitement was palpable as the chief executive officer of Apple Inc. officially opened its first company-owned store i… [+6999 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sakshi.com"
            },
            "author": "Sakshi",
            "title": "Mahindra Thar Vs Maruti Jimny: Comparison Including Mileage, Price and Comfort",
            "description": "Comparison Between Mahindra Thar And Maruti Jimny Includes Mileage, Design, Price, Features, Dimension, Colour Options, And Engine | 2023 Mahindra...",
            "url": "https://www.sakshi.com/telugu-news/business/mahindra-thar-vs-maruti-jimny-comparison-mileage-price-practicality-and-comfort-1661260",
            "urlToImage": "https://www.sakshi.com/sites/default/files/article_images/2023/06/17/Jeep-01.jpg",
            "publishedAt": "2023-06-17T06:14:17Z",
            "content": "Mahindra Thar vs Maruti Jimny: . ' ' . .\r\n-- . . . , , - - . .\r\n, -- . - . . \r\n. , , , , , , . . 4 . , .\r\n. , , , , , . ..   , , , , , , , .\r\n. 3850 , 1645 , 1730 , 210 , 2550 . .\r\n 3985 , 1820 , 197… [+172 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Akash Podishetti",
            "title": "Bull run! 26 BSE500 stocks offer double-digit weekly returns to investors",
            "description": "Positive macroeconomic data helped domestic markets, with the Nifty falling just short of all-time high levels. During the week, 26 BSE500 stocks provided double-digit returns, with Brightcom Group leading the way at 27%, followed by Wockhardt with 26%.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/bull-run-26-bse500-stock-offer-double-digit-weekly-returns-to-investors/articleshow/101058915.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101058918,width-1070,height-580,imgsize-469516,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-17T04:12:29Z",
            "content": "Better-than-expected macro data helped domestic markets remain in the positive arena as benchmark Nifty fell just short of all-time high levels.During the week, as many as 26 BSE500 stocks have deliv… [+2394 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Rakesh Patil",
            "title": "More than 70 smallcaps gain 10-28% as market finish at record closing high",
            "description": "For Nifty, on the upside the target would be all time high of 18888 and beyond that 19,000.",
            "url": "https://www.moneycontrol.com/news/business/stocks/more-than-70-smallcaps-gain-10-28-as-market-finish-at-record-closing-high-10811471.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/06/stocks_sensex_nifty_stock-3-770x433.jpg",
            "publishedAt": "2023-06-17T03:38:39Z",
            "content": "On the back of upbeat global, domestic data and strong FIIs investments, Indian markets finished the week at fresh record closing high, ignoring likely US rate hike worries, slowing growth in China, … [+3815 chars]"
        },
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }
    render() {
        return (
            <div className='newsComponent'>News
                <div className='row items'>
                    {this.state.articles.map((item) => {
                        return <div className='col col-md-4' key={item.urlToImage}>
                            <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News