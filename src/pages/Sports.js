import React, { Fragment, createContext, memo, useDebugValue,  useMemo,  useState } from 'react'
import Form from '../components/Form';

export const newsContext = createContext();

// // rendering same vakue again and again.

// export const useCount = () => {
//     const [count, setCount] = useState(0);
  
//     setInterval(() => {
//         setCount(count + 1);
//     }, 2000);
//     console.log('inside interval');
  
//     useDebugValue(count);
//     console.log('debuging');
//     return count;
// }

// // using useMemo() to avoid re-rendering.
export const useCount = () => {
    const [count, setCount] = useState(0);
  
    useMemo(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    useDebugValue(count);
  
    return count;
  };
  
function Sports() {
    const [sport, setSport] = useState('');
    const [players, setPlayers] = useState(null);
   
    const count = useCount();
    const sportChangeHandler = e => {
        setSport(e.target.value);
    }

    const playerChangeHandler = e => {
        setPlayers(e.target.value);
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!sport || !players) return alert('Please fill all the fields');
        console.log(`You are playing ${sport} with a team of ${players}`);
        setSport('');
        setPlayers(null);
    }
    return (
        <Fragment>
            <h2>Sports page</h2>
            <newsContext.Provider value={{ sport, players,count, onSubmitHandler, sportChangeHandler, playerChangeHandler }}>
                <Form />
            </newsContext.Provider>
            
        </Fragment>
    )
}

export default memo(Sports);
// export newsContext;