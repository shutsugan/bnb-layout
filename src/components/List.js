import React, {Component} from 'react';
import Item from './Item';

import '../css/List.css';

class List extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const items = [];
    const coordinates = [
      {lat: '52.520007', lng: '13.404954'},
      {lat: '52.52267', lng: '13.403323'},
      {lat: '52.526691', lng: '13.397916'},
      {lat: '52.529093', lng: '13.407186'},
      {lat: '52.536246', lng: '13.416198'},
      {lat: '52.539744', lng: '13.408816'},
      {lat: '52.534732', lng: '13.396371'},
      {lat: '52.552793', lng: '13.381007'},
      {lat: '52.550235', lng: '13.362554'},
      {lat: '52.543868', lng: '13.360322'},
      {lat: '52.544285', lng: '13.352168'},
      {lat: '52.547365', lng: '13.323157'},
      {lat: '52.541153', lng: '13.329423'},
      {lat: '52.536716', lng: '13.3441'},
      {lat: '52.530294', lng: '13.345216'},
      {lat: '52.520007', lng: '13.404954'},
      {lat: '52.42267', lng: '13.403323'},
      {lat: '52.526691', lng: '13.197916'},
      {lat: '52.829093', lng: '13.407186'},
      {lat: '52.536246', lng: '13.216198'},
      {lat: '52.639744', lng: '13.408816'},
      {lat: '52.534732', lng: '13.996371'},
      {lat: '52.555641', lng: '13.311007'},
      {lat: '52.355641', lng: '13.211007'},
    ]
    const faker = window.faker;

    coordinates.forEach(coordinate => {
      const item = {
        lat: coordinate.lat,
        lng: coordinate.lng,
        price: faker.commerce.price(),
        image: 'https://via.placeholder.com/400x260',
        title: faker.address.secondaryAddress(),
        info: faker.lorem.words()
      };

    	items.push(item);
    })

    this.setState({
      data: items
    });
  }

  render() {
    const items = this.state.data.map((item, index) => {
      return <Item key={index} item={item} />;
    });

    return(
      <div className="List">
        {items}
      </div>
    );
  }
}

export default List;
