import React, { Component, Fragment } from 'react';
import Header from '../Header';
import CollectionsList from './CollectionsList';
import AddCollectionForm from './AddCollectionForm';
import storage from './../../Commons/LocalStorage';

const { get, set } = storage();

class Collections extends Component {
  constructor() {
    super();
    const collections = get('collections') || [];
    this.state = {
      collections: [...collections],
    };
  }

  form = async (inputValue) => {
    await this.setState({ collections: [...this.state.collections, {
      name: inputValue,
      id: this.state.collections.length + 1,
    }]});
    set('collections', this.state.collections);
  }

  render() {
    const { collections } = this.state;
    return(
      <Fragment>
        <Header />
        <AddCollectionForm submitForm={this.form} />
        <CollectionsList items={collections}/>
      </Fragment>
    );
  }

}

export default Collections;