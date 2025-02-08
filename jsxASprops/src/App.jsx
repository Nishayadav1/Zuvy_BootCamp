
import './App.css'
import WeatherWidget from './components/WeatherWidget'

function App() {

  return (
    <>
      <h1>Weather temperature</h1>
      <WeatherWidget weatherType='sunny' temperature={35}/>
      <WeatherWidget weatherType='rainy' temperature={8}/>
      <WeatherWidget weatherType='cloudy' temperature={20}/>

    </>
  )
}

export default App
