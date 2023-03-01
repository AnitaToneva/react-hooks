import { useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';


const Counter = (props) => {
    const {count} = useContext(AuthContext)
    useEffect(() => {
        console.log(props.value);


        return () => {
            console.log('unmount')
        }
    }, [props.value])

    return (

        <p>{count}</p>
    )
}

export default Counter;