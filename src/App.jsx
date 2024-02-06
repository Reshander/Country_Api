
import './App.css'
import { Route, Routes } from 'react-router-dom'
import  Country  from './Components/Country'
import Countryapi from './Components/Countryapi'

function App() {

  return (
    <>
      <Routes >
        <Route path="/" element={<Country />} />
        <Route path="/country/:code" element={<Countryapi />} />
      </Routes>
     </>
      )
}

      export default App
