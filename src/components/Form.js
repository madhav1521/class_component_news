import React, { Fragment, useContext, useRef } from 'react'
import {newsContext,useCount} from '../pages/Sports'

function Form() {
    const ref = useRef(null);
    const { sport, players, onSubmitHandler, sportChangeHandler, playerChangeHandler,count } = useContext(newsContext);
    return (
        <Fragment>
                <form onSubmit={onSubmitHandler} className='form-control'>
                    <div className='my-2'>
                        <label htmlFor="sport">Name of the Sport:</label>
                        {/* <input type="text" id='sport' /> */}
                        <select name="sport" id='sport' ref={ref} onChange={sportChangeHandler}>
                            <option value=''></option>
                            <option value='Cricket'>Cricket</option>
                            <option value='Football'>Football</option>
                            <option value='Basketball'>Basketball</option>
                            <option value='Tennis'>Tennis</option>
                        </select>
                        {sport}
                    </div>
                    <div className='my-2'>
                        <label htmlFor="num">Number of players can play is:</label>
                        <input type="number" id='num' ref={ref} onChange={playerChangeHandler} />
                        {players}
                    </div>
                    <button type='submit'>Submit</button>
                    <button type='button'>{count}</button>
                </form>
        </Fragment>
    )
}

export default Form
