import React, { Component } from 'react';
import './addCollectionForm.css';
import { Input, Button } from '../../Commons';

const initialState = {
  name: ''
}

class AddCollectionForm extends Component {
  constructor() {
    super();
    this.state = {...initialState};
  }
  modifyField = (key) => ({ target }) => {
    this.setState({ [key]: target.value });
  }
  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.submitForm(this.state.name);
  }
  render() {
    const { name } = this.state;
    return(
      <form onSubmit={this.handlerSubmit} className="login-form-container">
        <div className="form-group">
          <label htmlFor="name">Create a coleccion:</label>
          <Input
            value={name}
            required
            onChange={this.modifyField('name')}
            type="name"
            id="name"
            placeholder="Introduce nombre de la colecion a crear"
          />
        </div>
        <div className="button-container">
          <Button type="submit">Add</Button>
        </div>
      </form>
    );
  }
}

export default AddCollectionForm;
