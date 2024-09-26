// Node Modules
import { useState } from 'react'

// Redux Slice & Hooks
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/CounterSlice'
import { useFetchBreedsQuery } from './features/dogs/DogsApiSlice'

// Styles for this "App.tsx"
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const [numDogs, setNumDogs] = useState(10)

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs)

  function handleClick() {
    // dispatch(incremented())
    dispatch(amountAdded(3))
  }

  return (
    <>
      <h1>React Redux Project</h1>
      <div className="card">
        <div>
          <button onClick={ handleClick }>
            count is {count}
          </button>
        </div>

        <br/>

        <div>
          <p>
            Dogs to fetch:
            <select value={ numDogs } onChange={ (e) => setNumDogs(Number(e.target.value)) } style={{ marginLeft: '10px' }}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </p>
          
        </div>

        <br/>

        <div style={{marginBottom: '50px'}}>
          <p>Number of dogs fetched: { data.length }</p>
        </div>  

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((breed) => (
                  <tr key={ breed.id }>
                    <td>{ breed.name }</td>
                    <td>
                      <img src={ breed.image.url } alt={ breed.name } height={ 250 }/>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <p className="read-the-docs" style={{ marginTop: '40px' }}>
        Concept Developed by: Ashfaque Hossain Abir
      </p>
    </>
  )
}

export default App