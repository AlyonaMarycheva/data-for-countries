import React from 'react'

const CountryInfo = ({filteredCountries}) => {
    const [country] = filteredCountries
    return <div>
          <h1>{country.name}</h1>
        <div>captital {country.capital}</div>
        <div>population {country.population}</div>
        <h3>langueges</h3>
        <ul>
          {country.languages.map(language => <li key = {language.name}>{language.name}</li>)}
        </ul>
        <img src = {country.flag} width="150" alt="flag"/>
    </div>
  }

export default CountryInfo