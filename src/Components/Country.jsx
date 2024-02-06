import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Country() {
    let [countryapi, setCountryapi] = useState([])
    let [userInput, setUserInput] = useState("")
    const navigate = useNavigate()
    const fethUserApi = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountryapi(data)
            })
    }
    const filteredData = countryapi.filter((val) => {
        return val.name.common.toLowerCase().includes(userInput.toLowerCase())
    })

    useEffect(() => {
        fethUserApi()
    }, [])

    return (
        <div >
            <SearchBar setUserInput={setUserInput} />
            <div className=' d-flex justify-content-between flex-wrap '>
             


                {
                    
                    (filteredData.length > 0) ? filteredData.map((val) => {
                        return (
                            <div className='  shadow-sm p-3 mb-5 bg-body-tertiary rounded' onClick={() => navigate(`country/${val.cca3}`)}>
                                <img height="100" width="120" src={val.flags.png} />
                                <h5 className=' m-1 text-warning bg-dark'>{val.name.common}</h5>
                                <h6>{val.population}</h6>
                            </div>
                        )
                    }) : <h1>Data not found</h1>
                }
                
            </div>

        </div>
    )
}
