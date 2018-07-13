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

    activate() {
      if (this.div !== null) this.div.classList.add('is-active');
    }

    deactivate() {
      if (this.div !== null) this.div.classList.remove('is-active');
    }

    active() {
      if (this.div !== null) this.div.classList.remove('is-active');
      this.enableCallbacks.forEach(cb => cb());
    }

    deactive() {
      if (this.div !== null) this.div.innerHTML = this.text;
    }

    setContent(html) {
      this.html = html;
    }
}

export default TextMarker;
