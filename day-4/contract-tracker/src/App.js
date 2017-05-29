import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class PlayerInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      price: ""
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let contract = {
      title: this.state.title, 
      description: this.state.description, 
      price: this.state.price,
    };

		this.props.onSubmit(contract);
  }

  handleTitle(event) {
		var value = event.target.value;

		this.setState(function() {
			return {
				title: value,
        description: this.state.description,
        price: this.state.price
			}
		});
	}

  handleDescription(event) {
		var value = event.target.value;

		this.setState(function() {
			return {
        title: this.state.title,
				description: value,
        price: this.state.price
			}
		});
	}

  handlePrice(event) {
		var value = event.target.value;

		this.setState(function() {
			return {
        title: this.state.title,
				description: this.state.description,
        price: value
			}
		});
	}

  render() {
		return (
			<form className='column' onSubmit={this.handleSubmit}>
				<label className='header' htmlFor='title'>
					New Contact
				</label>
				<input
					id='title'
					placeholder='Title of Contract'
					type='text'
					autoComplete='off'
					value={this.state.title}
					onChange={this.handleTitle}
				/>
        <input
          id='description'
					placeholder='Description'
					type='text'
					autoComplete='off'
					value={this.state.description}
					onChange={this.handleDescription}
        />
        <input
          id='price'
					placeholder='Price'
					type='text'
					autoComplete='off'
					value={this.state.price}
					onChange={this.handlePrice}
        />
				<button
				className='button'
				type='submit'
				disabled={!this.state.username}>
					Submit
				</button>
			</form>
		)
	}

}


class App extends Component {
  constructor(props) {
    super(pros);

    this.state = {
      contractList: []
    };
  }

  onSubmit (contact) {
    contractList[contractList.length] = contact;
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Contract Tracker</h1>
        <PlayerInput id="input"/>
        <ol className="contractList">
          {this.state.contractList.map(contract =>
            <li id={this.state.contractList.description} className="contact" >
              <h1 className="title">
                {this.state.contractList.title}
              </h1>
              <h3 className="price">
                {this.state.contractList.price}
              </h3>
            </li>
          )}
        </ol>
      </div>
    );
  }
}

export default App;
