import React, {Component} from 'react';

import '../css/Item.css';

class Item extends Component {
  render() {
    const item = this.props.item;
    return(
      <div className="Item js-marker" data-lat={item.lat} data-lng={item.lng} data-price={item.price}>
				<img className="Item__image" src={item.image} alt="Location name"></img>
				<h4 className="Item__title">{item.title}</h4>
				<p className="Item__info">{item.info}</p>
			</div>
    );
  }
}

export default Item;
