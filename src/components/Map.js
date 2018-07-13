import React, {Component} from 'react';
import GoogleMap from '../modules/GoogleMap';

import '../css/Map.css';

class Map extends Component {
  componentDidMount() {
    this.initMap();
  }

  async initMap() {
  	//init the map when the resources loads/
    const card_container = document.querySelector('.Map');
  	const card = new GoogleMap();
  	await card.load(card_container);

  	let active_marker = null;
  	let enabled_marker = null;

  	//get all the items.
  	const items = Array.from(document.querySelectorAll('.js-marker'));
  	items.forEach(item => {
  		let marker = card.addMarker(item.dataset.lat, item.dataset.lng, `${item.dataset.price} €`);
      marker.setContent(item.innerHTML);
      
  		marker.enableCallbacks.push(_ =>  {
  			if (enabled_marker !== null) {
  				enabled_marker.deactive();
  			}
  			enabled_marker = marker;
  		});

  		item.addEventListener('mouseover', _ => {
  			marker.activate();

  			active_marker = marker;
  		});

  		item.addEventListener('mouseout', _ => {
  			if (active_marker !== null) active_marker.deactivate();
  		});
  	});

  	card.centerMap();
  }

  render() {
    return(
      <div className="Map"></div>
    );
  }
}

export default Map;
