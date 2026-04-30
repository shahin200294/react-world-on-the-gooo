import React, { use, useState } from 'react';
import Country from '../Country/country';
import './Countries.css';

const Countries = ({ countriesPromises }) => {
    const [visitedCountries, setVisitedCountries,] = useState([])
    const [visitedFlags, setVisitedFlags,] = useState([])
    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);

        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVistedFlags = [...visitedFlags , flag]
        setVisitedFlags(newVistedFlags);
    }

    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>In The Countries: {countries.length}</h1>
            <h3>Total Visited Country: {visitedCountries.length}</h3>
            <h3>total Visited Flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        handleVisitedCountries= {handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
