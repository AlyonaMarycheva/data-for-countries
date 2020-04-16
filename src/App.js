import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const regexp = new RegExp(`${filter}`, 'i')


  console.log(filter)
  const findCountries = (event) => {
    setFilter(event.target.value)
  }

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)})
  }  
  useEffect(hook, [])

  return (
    <div>
      <div>
        find countries <input value = {filter} onChange = {findCountries}/>
      </div>
      <Countries countries={countries} regexp = {regexp}/>
    </div>
    
  )
  
}

export default App;
