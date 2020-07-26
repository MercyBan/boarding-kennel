import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Utils from './Utils';

class CheckIn extends Component {

  defaultState = {
    name: '',
    breed: '',
    age: '',
    allergies: '',
    amountOfFood: '',
    isFed: false,
    amountFed: '',
    kennelSize: '',
    showAmountFed: '',

  };

  constructor() {
    super();
    this.state = this.defaultState;

  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
        breed: this.state.breed,
        age: parseInt(this.state.age.charAt(0)),
        name: this.state.name,
        allergies:this.state.allergies,
        amountOfFood: parseInt(this.state.amountOfFood.charAt(0)),
        amountFed: parseInt(this.state.amountFed.charAt(0)),
        isFed: this.state.isFed,
        kennelSize: this.state.kennelSize.toUpperCase()
    }
    Utils.post("/addDog", postData)
    this.resetState()
  }
  resetState() {
    this.setState(this.defaultState)
  }
  onRadioChange = (e) => {
    if (e.target.id.includes("yes")) {
      this.setState({ [e.target.name]: true });
      this.setState({ showAmountFed: true });
    } else {
      this.setState({ [e.target.name]: false });
      this.setState({ showAmountFed: false })
    }

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="DogName">
            <Form.Label>Dog's Name</Form.Label>
            <Form.Control type="input" name="name"
              value={this.state.name} onChange={this.onChange} />
          </Form.Group>

          <Form.Group controlId="DogAge">
            <Form.Label> How old is your dog?</Form.Label>
            <Form.Control as="select" name="age"
              value={this.state.age} onChange={this.onChange} >
              <option>0 years</option>
              <option>1 year</option>
              <option>2 years</option>
              <option>3 years</option>
              <option>4 years</option>
              <option>5 years</option>
              <option>6 years</option>
              <option>7 years</option>

            </Form.Control>
          </Form.Group>
          <Form.Group controlId="DogBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control type="input" name="breed"
              value={this.state.breed} onChange={this.onChange} />

          </Form.Group>

          <Form.Group controlId="Allergies">
            <Form.Label> List Of Allergies </Form.Label>
            <Form.Control as="textarea" rows="3" name= "allergies"
              value={this.state.allergies} onChange={this.onChange} />
          </Form.Group>
          <Form.Group controlId="RequiredFood">
            <Form.Label> How many cups of food does your dog eat?</Form.Label>
            <Form.Control as="select" name="amountOfFood"
              value={this.state.amountOfFood} onChange={this.onChange} >
              <option>1 Cup</option>
              <option>2 Cups</option>
              <option>3 Cups</option>
              <option>4 Cups</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Has your  dog been fed today?</Form.Label>
            <div key={'hasBeenFed'} className="mb-2">
              <Form.Check inline onChange={this.onRadioChange}
                name='isFed'
                type='radio'
                id='yes-Fed'
                label={'Yes'}
                checked = {this.state.isFed}
              />
              <Form.Check inline onChange={this.onRadioChange}
                name='isFed'
                type='radio'
                id='No-Fed'
                label={'No'}
                checked = {!this.state.isFed}
              />
            </div>
          </Form.Group>
          <Form.Group controlId="Feeding">
            <Form.Label> How many cups of food has your dog been fed?</Form.Label>
            <Form.Control as="select" name="amountFed"
              value={this.state.amountFed} onChange={this.onChange} >
              <option>1 Cup</option>
              <option>2 Cups</option>
              <option>3 Cups</option>
              <option>4 Cups</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="KennelSize">
            <Form.Label> Kennel Size</Form.Label>
            <Form.Control as="select" name="kennelSize"
              value={this.state.kennelSize} onChange={this.onChange} >

              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>

        </Form>
      </div>
    );

  }
}

export default CheckIn;