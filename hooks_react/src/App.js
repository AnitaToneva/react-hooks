import { useState, useEffect } from 'react'
import './App.css';
import Counter from './components/Counter';
import CharacterList from './components/CharacterList';
import AuthContext from './contexts/AuthContext';


function App() {

    const [state, setState] = useState('');
    const [count, setCount] = useState(0);
    const [plus, setPlus] = useState('')
    const [info, setInfo] = useState({
        name: 'Ivan',
        age: 30,
        hobby: ['first', 'second', 'third']
    })


    useEffect(() => {
        /* (async () => {
            
         })();*/
        setPlus('+')
        setTimeout(() => {
            setState('Pehso')


        }, 1500)
    }, [])

    const addHobby = (hobby) => {
        setInfo(oldState => ({
            ...oldState,
            age: 31,
            hobby: [...oldState.hobby, hobby]
        }))
    }
   

    return (
        <AuthContext.Provider value={{count, user: info, addHobby: addHobby }}>
            <div className="App">
                <h1>Hello World</h1>
                <div>
                    <p>{info.name}</p>
                    <p>{info.age}</p>
                    <p>{info.hobby.join(', ')}</p>
                </div>
                <p style={{ color: 'red' }}>{!state ? 'Loading...' : state}</p>
                {count < 10 ? <Counter /> : null}

                <button onClick={() => setCount(count + 1)}>{plus}</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <div >
                    <h3>Hobbies</h3>
                    <ol >
                        {info.hobby.sort((a,b)=>a.localeCompare(b)).map(x => <li key={x}>{x}</li>)}
                    </ol>
                </div>
                <CharacterList />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
