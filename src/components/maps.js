import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import styles from "./maps.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWJveiIsImEiOiJjamJucXhjbzc0ZXdjMnh0YnJqMWI4NmR1In0.HMv4BpyCUAid4JwcIJ9Yjg';



export default class Maps extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 2.347,
      lat:  48.859,
      zoom: 11,
      location:"po"


    };
  }

  componentDidMount() {
    const { lng, lat, zoom,location } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/adriboz/ck192ru3501e41csd6kjk1zlq',
      center: [lng, lat],
      zoom
    });









    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }


  render() {
    const { lng, lat, zoom } = this.state;


    return (

      <div className="map">



        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />

        </div>
    );
  }
}
