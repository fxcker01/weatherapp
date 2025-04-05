import sun from '../img/only-sun.svg'
import clouds from '../img/clouds.svg'

function City(props) {
    return (<div className="city">
        <h3>{props.city.name}</h3>
        <p>Temperature: {props.city.temp}</p>
        <p>Feels like: {props.city.feels}</p>
        {props.city.temp >= 10 && <img src={sun} className='sun' alt="sun icon" />}
        {props.city.temp < 10 && <img src={clouds} className='clouds' alt="clouds icon"/>}
        <button onClick={() => props.deleteWeather(props.city.name)}>Remove</button>
    </div>)
}

export default City;