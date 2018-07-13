import React, {Component} from 'react';
import Item from './Item';

import '../css/List.css';

class List extends Component {
  constructor() {
    super();

    this.state = {
      data = [];
    }
  }

  componentDidMount() {
    const items = [];
    for (let i = 0; i < 12; i++) {
      const item = {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        price: faker.commerce.price(),
        image: 'https://via.placeholder.com/400x260',
        title: faker.lorem.sentence(),
        info: faker.lorem.slug()
      };
    	items.push(item);
    }

    this.setState({
      data: items
    });
  }

  render() {
    const items = this.state.data.map(item => {
      return <Item item={item} />;
    });

    return(
      <div className="List">
        {items}
      </div>
    );
  }
}

export default List;
