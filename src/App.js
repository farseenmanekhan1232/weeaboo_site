import React from "react" ; 
import "./App.css";


class App extends React.Component {

  handleSubmit = task => {
    Search_Eng(task);
    // console.log(task);
    }
  
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  render() {
    return(
      <div className=''>
           <SubmitForm onFormSubmit={this.handleSubmit} />
      </div>
    );
  } 
}


class SubmitForm extends React.Component {
  state = { term: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.term === '') return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          className='input'
          placeholder='Enter Item'
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value})}
        />
        <button className='submit-button'>Add</button>
      </form>
    );
  }
}



async function Search_Eng(query , type){
  const axios = require('axios');
  const params = {
    access_key: '5ced025eaa8bc113f9b1ef5a1ceadadb',
    query: query,
    type:type
  }

  axios.get('http://api.serpstack.com/search', {params})
    .then(response => {
      //if condition  to be used
    }).catch(error => {
      console.log(error);
  });
}

export default App;