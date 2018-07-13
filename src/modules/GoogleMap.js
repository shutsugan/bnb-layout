import TextMarker from './TextMarker';

class GoogleMap {
	constructor() {
		this._map = null;
		this._bounds = null;
		this._marker = null;
	}
  
	/**
	 * Load the card in the element
	 * @param {HTMLElement} element
	 * @return {TextMarker} the marker
	*/
	async load(element) {
		this._map = new window.google.maps.Map(element, {zoom: 1});
    this._bounds = new window.google.maps.LatLngBounds()
    this._marker = TextMarker;

    return this._marker;
	}

	/**
	 * add marker in the map.
	 * @param {string} lat
	 * @param {string} lng
	 * @param {string} text
	*/
	addMarker(lat, lng, text) {
		const point = new window.google.maps.LatLng(lat, lng);
		const marker = new this._marker(point, this._map, text);

		marker.enableCallbacks.push(_ => this._map.setCenter(marker.pos));

		this._bounds.extend(point);

		return marker;
	}

	/**
	 * center the map to gather the points
	*/
	centerMap() {
		this._map.panToBounds(this._bounds);
		this._map.fitBounds(this._bounds)
	}
}

export default GoogleMap;
