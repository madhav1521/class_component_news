import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <ul className='header'>
                    <h2>News for the day</h2>
                    <li><Link to='/news'>Home</Link></li>
                    <li><Link to='/sports'>Sports</Link></li>
                    <li><Link to='/politics'>Politics</Link></li>
                    {/* <input type='search' /> */}
                </ul>
            </Fragment>
        )
    }
}
