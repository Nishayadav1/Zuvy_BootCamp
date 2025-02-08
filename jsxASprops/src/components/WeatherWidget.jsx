import WeatherIcon from "./WeatherIcon";

const WeatherWidget = ({weatherType,temperature}) => {
    let icon;
    let message;

     if(weatherType==='sunny'){
        icon=<span role="img" aria-label="sun">🌞</span>;
     }else if(weatherType==='rainy'){
        icon=<span role="img" aria-label="rain">🌧️</span>;
     }else if(weatherType==='cloudy'){
         icon=<span role="img" aria-label="cloud">☁️</span>;
     }


     if (temperature>30){
        message = "It's hot outside! Drink plenty of water.";
     }else if(temperature<10){
        message="It's cold! Make sure to bundle up.";
     }else {
        message='Enjoy the moderate weather';
     }

  return (
    <>
       <WeatherIcon>{icon}</WeatherIcon>
       <p>{temperature}</p>
       <p>{message}</p>
    </>
  )
}

export default WeatherWidget
