import {useContext} from 'react'
import AuthContext from './../contexts/AuthContext'

const Character=({
    name
})=>{

    const { addHobby} = useContext(AuthContext)

    return(
        <li onClick={ () => addHobby(name)}>{name}</li>
    )
}

export default Character;