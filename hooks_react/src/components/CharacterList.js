import { useState, useContext } from 'react'
import AuthContext from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import Character from './Character';


const CharacterList = () => {
    const {count}= useContext(AuthContext)
    const [url, setUrl] =useState('http://swapi.dev/api/people')
    //const url='http://swapi.dev/api/people';
        const{state: characters , isLoading, error}=useFetch(url)

    return (
        <>
        <h1>Count = {count}</h1>
        <ul>
            {characters.map(x =><Character key={x.name} name={x.name} />)}
        </ul>
        <button onClick={()=> setUrl('http://swapi.dev/api/planets')}>Load planets</button>
        </>
    )
}


export default CharacterList;