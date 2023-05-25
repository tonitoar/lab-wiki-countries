//import countriesData from "./countries.json"
import Navbar from "./components/Navbar.jsx"
import CountriesList from "./components/CountriesList.jsx"
// src/App.js
import "./App.css";

function App() {

  //const [countries, setCountries] = useState(countriesData)

  return (
  <div className="App">
<Navbar />
<CountriesList />




  </div>
  );
}
export default App;
