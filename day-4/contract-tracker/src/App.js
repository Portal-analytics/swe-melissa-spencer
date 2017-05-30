import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class UserInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      price: "",
    };

    this.updateContractInput = this.updateContractInput.bind(this);
    this.submitContract = this.submitContract.bind(this);
  }

  submitContract(event) {
    event.preventDefault();
		this.props.onSubmit(this.state.title, this.state.description, this.state.price, this.props.editIndex);

    this.setState({
      title: "",
      description: "",
      price: ""
    });
  }

  updateContractInput(field, event) {
		var value = event.target.value;

		this.setState(function() {
			return {
        ...this.state,
				[field]: value,
			}
		});
	}

  render() {
    //debugger;
		return (
			<form className='column' onSubmit={this.submitContract}>
        {this.props.editIndex < 0 &&
        <div>
				<label className='header' htmlFor='title'>
					New Contract
				</label>
				<input
					id='title'
					placeholder='Title of Contract'
					type='text'
					autoComplete='off'
					value={this.state.title}
					onChange={e => this.updateContractInput("title", e)}
				/>
        <input
          id='description'
					placeholder='Description'
					type='text'
					autoComplete='off'
					value={this.state.description}
					onChange={e => this.updateContractInput("description", e)}
        />
        <input
          id='price'
					placeholder='Price'
					type='text'
					autoComplete='off'
					value={this.state.price}
					onChange={e => this.updateContractInput("price", e)}
        />
				<button
				className='button'
				type='submit'
				disabled={!this.state.title && !this.state.description && !this.state.price}>
					Submit
				</button>
        </div>}
        
        {this.props.editIndex >= 0 &&
        <div>
				<label className='header' htmlFor='title'>
					Edit Contract {this.props.editIndex + 1}
				</label>
				<input
					id='title'
					placeholder={this.props.uploadedContract.title}
					type='text'
					autoComplete='off'
					value={this.state.title}
					onChange={e => this.updateContractInput("title", e)}
				/>
        <input
          id='description'
					placeholder={this.props.uploadedContract.description}
					type='text'
					autoComplete='off'
					value={this.state.description}
					onChange={e => this.updateContractInput("description", e)}
        />
        <input
          id='price'
					placeholder={this.props.uploadedContract.price}
					type='text'
					autoComplete='off'
					value={this.state.price}
					onChange={e => this.updateContractInput("price", e)}
        />
				<button
				className='button'
				type='submit'
				disabled={!this.state.title && !this.state.description && !this.state.price}>
					Finish Editing
				</button>
        </div>}
			</form>
		)
	}

}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contractList: [],
      editIndex: -1,
      editContract: {title: "", description: "", price: ""}
    };

    this.createContract = this.createContract.bind(this);
    this.uploadContract = this.uploadContract.bind(this);
    this.editContract = this.editContract.bind(this);
  }


  uploadContract (editIndex) {
    this.setState({
      ...this.state,
      editIndex: editIndex,
      editContract: this.state.contractList[editIndex]
    });
  }

  editContract (title, description, price, index) {
    let newContract = {
      title: title,
      description: description, 
      price: price
    };

    console.log(newContract);
    console.log(index);

    let newContractList = this.state.contractList;
    newContractList[index] = newContract;  //error

    console.log(newContractList);

    this.setState ({
      ...this.state, 
      contractList: newContractList,
      editIndex: -1,
      editContract: {title: "", description: "", price: ""}
    });
  }

  createContract (title, description, price, index) {
    let newContract = [{
      title: title,
      description: description, 
      price: price
    }];

    let newContractList = this.state.contractList.concat(newContract);

    this.setState ({
      ...this.state, 
      contractList: newContractList 
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Contract Tracker</h1>

        {this.state.editIndex < 0 && 
        <UserInput id="input" 
          onSubmit={this.createContract}
          editIndex={this.state.editIndex}
          uploadedContract={this.state.editContract}
          />}

          {this.state.editIndex >= 0 && 
        <UserInput id="input" 
          onSubmit={this.editContract}
          editIndex={this.state.editIndex}
          uploadedContract={this.state.editContract}
          />}

        <ul className="contractList">
          {this.state.contractList.map((contract, index) =>
            <li key={index} className="contract" >
              <h1 className="title">
                {contract.title}
              </h1>
              <h3 className="description">
                Description: {contract.description}
              </h3>
              <h3 className="price">
                Price: {contract.price}
              </h3>
              <button className='button'
									onClick={(e) => this.uploadContract(index)}>
                Edit
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
