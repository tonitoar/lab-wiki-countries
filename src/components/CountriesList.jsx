import { useState } from 'react';
import { Link } from 'react-router-dom';
import countriesData from '../countries.json';

//STYLES

function CountriesList() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <>
      <div>
        {/* <div className="container"> 
                    <div className="row"> */}
        {countries.map((country, aplha3Code) => {
          return (
            <div key={aplha3Code}>
              <h3>{country.name.common}</h3>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flags"
                />
                <Link to={'/CountryDetails/' + country.aplha3Code}>
                  {country.alpha3Code}
                </Link>
            </div>
          );
        })}
        {/* </div>
                </div> */}
      </div>
    </>
  );
}

export default CountriesList;
