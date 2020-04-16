import React from 'react'
import CountryInfo from './CountryInfo'

const Countries = ({countries, regexp}) => {

    const filteredCountries = countries.filter(country => regexp.test(country.name))
    
    if (filteredCountries.length > 10) 
      return <div>Too many matches, specify another filter</div>
  
    if (filteredCountries.length === 1)
      return <CountryInfo filteredCountries={filteredCountries}/>
    
    return <div>
      {filteredCountries.map(country => <div key = {country.name}>{country.name}<button>show</button></div>)}
    </div>
  }

export default Countries