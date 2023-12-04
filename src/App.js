import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const[countryName, setCountryName] = useState('');
  const[countryData, setCountryData] = useState([]);
  
  function getData(){

      axios.get(`https://disease.sh/v3/covid-19/countries/${countryName}`)
      .then((res) =>  setCountryData([res.data]))
      
     

  }

  return (
    <div className="App">
      <h1>Country Wise Covid Tracker</h1>
     <div className='form'>
      <label>Country Name:</label><br/>
      <input type='text' value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder='Enter country name'/>
      <button onClick={getData}>Get Data</button>
      </div>
      <div>

        {
          countryData &&
          countryData.map((data,index) => {
            return (
              <div key={index}>
                <table>
                  <tr>
                     <th>Country</th>
                     <th>Population</th>
                     <th>Case</th>
                     <th>Updated</th>
                     <th>Deaths</th>
                  </tr>
                  <tr>
                    <td>{data.country}</td>
                    <td>{data.population}</td>
                    <td>{data.cases}</td>
                    <td>{data.updated}</td>
                    <td>{data.deaths}</td>
                  </tr>
                </table>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
