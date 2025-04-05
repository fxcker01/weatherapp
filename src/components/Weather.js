import City from './City'

function Weather(props) {

    const data = props.cities.length === 0 ?
        (<p>There are no cities yet</p>) : (<div>
            {props.cities.map(el => (
                <City deleteWeather={props.deleteWeather} key={el.name} city={el} />
            ))}
        </div>)

    return (<div>
        <h2>All cities</h2>
        {data}
    </div>)
}

export default Weather;