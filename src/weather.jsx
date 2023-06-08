export default function Weather() {
    // const response = fetch("https://api.open-meteo.com/v1/forecast?latitude=1.52&longitude=110.34&hourly=temperature_2m,relativehumidity_2m,rain,uv_index&past_days=7");
    // const data = response.json()
    // const hour = data.hourly

    const temperature = "35 C"
    return (
        <>
            <div>
                <h4> It's too fucking hot because it's {temperature} degrees! </h4>
            </div>
        </>
    )
}
