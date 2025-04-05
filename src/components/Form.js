import { use, useState } from "react";

function Form(props) {
    const [city, setCity] = useState('')

    const getWeather = (city) => {
        props.getWeather(city.trim())
        setCity('')
    }

    return (
        <div>
            <h1>Getting the weather</h1>
            <form>
                <input placeholder="Enter city" value={city} 
                onChange={e => setCity(e.target.value) } />
                <button type="button" onClick={() => getWeather(city)}>Search</button>
            </form>
        </div>
    )
}

export default Form;

