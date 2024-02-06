import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Countryapi() {
  const { code } = useParams();
  let [country, setCountry] = useState([]);

  const fethUserApi = () => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  };

  // var nativeName = Object.values(country[0]?.name.nativeName)[0].common

  useEffect(() => {
    fethUserApi();
  }, []);
  return (
    <div className="countapi  border border-info border-start-0 rounded-end">
      <div>
        <div className="table-responsive">
          <h1>{country[0]?.name.common}</h1>
          <h4 className="mt-4">Names</h4>
          <table className="table table-bordered w-100">
            <tbody>
              <tr>
                <th>Common</th>
                <td>{country[0]?.name.common}</td>
              </tr>
              <tr>
                <th>Official</th>
                <td>{country[0]?.name.official}</td>
              </tr>
              <tr>
                <th>Common (Native)</th>
                {/* <td>{nativeName}</td> */}
              </tr>
              <tr>
                <th>Official (Native)</th>
                {/* <td >{country[0]?.name.nativeName.official}</td> */}
              </tr>
              <tr>
                <th>Alternative Spellings</th>
                <td>
                  {" "}
                  {country[0]?.altSpellings[0]},{country[0]?.altSpellings[1]}
                </td>
              </tr>
              <tr>
                <th>Location</th>
                <td>
                  <a href={country[0]?.maps.googleMaps}>Maps</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-responsive">
          <h4>Geography</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Region</th>
                <td>{country[0]?.region}</td>
              </tr>
              <tr>
                <th>SubRegion</th>
                <td>{country[0]?.subregion}</td>
              </tr>
              <tr>
                <th>Capital</th>
                <td>{country[0]?.capital}</td>
              </tr>
              <tr>
                <th>Demonyms</th>
                <td>{country[0]?.demonyms.eng.f}</td>
              </tr>
              <tr>
                <th>Lat/Lon</th>
                <td>{country[0]?.latlng[0]}</td>
              </tr>
              <tr>
                <th>Area</th>
                <td>{country[0]?.area}km2</td>
              </tr>
              {/* <tr>
                                <th>Native language</th>
                                <td className="ng-binding">{country[0]?.languages.hin},{country[0]?.languages.eng}</td>
                            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <img src={country[0]?.flags.png}></img>
      </div>
    </div>
  );
}
