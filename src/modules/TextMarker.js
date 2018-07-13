class TextMarker extends window.google.maps.OverlayView {
    constructor (pos, map, text) {
        super()
        this.div = null;
        this.html = null;
        this.pos = pos;
        this.text = text;
        this.setMap(map);
        this.enableCallbacks = [];
    }

    /**
  	 * Add marker to attach in map.
  	*/
    onAdd () {
        this.div = document.createElement('div');
        this.div.classList.add('marker');
        this.div.style.position = 'absolute';
        this.div.innerHTML = this.text;
        this.getPanes().overlayImage.appendChild(this.div);

        this.div.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();

          this.div.innerHTML = this.html;
          this.div.classList.add('is-poped');
          this.active();
        });
    }

    draw () {
        let position = this.getProjection().fromLatLngToDivPixel(this.pos);
        this.div.style.left = position.x + "px";
        this.div.style.top = position.y + "px";
    }

    onRemove () {
        this.div.parentNode.removeChild(this.div);
    }

    /**
  	 * highlight the marker when hovering over the item.
  	*/
    activate() {
      if (this.div !== null) this.div.classList.add('is-active');
    }

    /**
  	 * remove highlight from prev highlighted marker.
  	*/
    deactivate() {
      if (this.div !== null) this.div.classList.remove('is-active');
    }

    active() {
      if (this.div !== null) this.div.classList.remove('is-active');
      this.enableCallbacks.forEach(cb => cb());
    }

    deactive() {
      this.div.classList.remove('is-poped');
      if (this.div !== null) this.div.innerHTML = this.text;
    }

    /**
  	 * set the content of the marker to reflect the item's.
     * @param {HTMLElement} html item text content
  	*/
    setContent(html) {
      this.html = html;
    }
}

export default TextMarker;
