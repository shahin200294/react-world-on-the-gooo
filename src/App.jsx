
import { Suspense } from 'react'
import './App.css'
import Countires from './components/Countries/Countries'
import Countries from './components/Countries/Countries'


const countriesPromises = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())


function App() {


  return (
    <>

      <Suspense fallback={<p>Nadir Vai Loading..</p>}>
        <Countries countriesPromises={countriesPromises}></Countries>
      </Suspense>

      {/* <h1>React world on the go.......</h1> */}




    </>
  )
}

export default App
