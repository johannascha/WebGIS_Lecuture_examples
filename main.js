import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';    //Kachel Bibliothek zum laden der Kartenausschnitte 
import OSM from 'ol/source/OSM';
//hier werden die verwendete pakete importiert 

const map = new Map({
  target: 'map',                           //verküfungsstelle mit der index.html id map
  layers: [
    new TileLayer({                       //Arrey mit den Layern, hier können weiter hinzugrfügt werden 
      source: new OSM()
    })
  ],
  view: new View({                        //Festlegen wie die Karte dargestellt werden soll 
    center: [0, 0],                       // WebMecator basis (psydo)
    zoom: 5
  })
});
