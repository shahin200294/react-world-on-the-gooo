import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [Visited, setVisited] = useState(false);
    // console.log(Country);
    // console.log(handleVisitedCountries);

    const [visitedFlags, setVisitedFlags] = useState([]);
    const languageList = Object.values(country.languages.languages);
    
    const handleVisited = () =>{
        // setvisited(true)
        setVisited(Visited? false : true);

        handleVisitedCountries(country);
        // console.log('clickd');
    }

    return (
        <div className={`country ${Visited ? 'country-visited' : 'country-not-visited'}`}>
            <img src={country.flags?.flags?.png} alt={country.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>languages: {languageList[0]}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big-Country" : "Small-Country"}</p>
            <button onClick={handleVisited}>
                {Visited ? 'Visited' : 'Not Visitesd'}
            </button> 
            <button onClick={() => {handleVisitedFlag(country.flags?.flags?.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;