import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    let Rain_Url = "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let Cold_Url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Hot_Url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    console.log(ThunderstormIcon)
    return <>
        <div className="infobox">
            <div className='card-container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80
                            ? Rain_Url :
                            info.temp > 15 ?
                                Hot_Url :
                                Cold_Url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            {info.humidity > 80
                                ? <ThunderstormIcon /> :
                                info.temp > 15 ?
                                    <WbTwilightIcon /> :
                                    < AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C </p>
                            <p>Humidity = {info.humidity}  </p>
                            <p>Min Temp = {info.tempMin}&deg;C  </p>
                            <p>Max Temp = {info.tempMax}&deg;C  </p>

                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    </>
}