import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Breakdown from './components/Breakdown';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      sortedData: []
    }
  }

  sum = () => {
    let sum = 0
    for (let data of this.state.data) {
      sum += data.amount
    }
    return sum
  }

  // pushTransaction = (transaction) => {
  //   let newData = [...this.state.data]
  //   newData.push(transaction)

  //   this.setState({
  //     data: newData
  //   }, function(){
  //     console.log(this.state.data)
  //   })
  // }

  pushTransaction = async (transaction) => {
    await axios.post("http://localhost:4000/transaction", transaction, function (res) {
    })
    this.componentDidMount()
  }

  async getUsers() {
    return axios.get("http://localhost:4000/transactions")
  }

  async componentDidMount() {
    const response = await this.getUsers()
    this.setState({ data: response.data })
  }

  render() {
    let data = this.state.data
    return (
      <Router>
        <div className="App">
        <div className="title">Bank App</div>
          <div className='Balance' style={this.sum() > 0 ? { color: '#76e476' } : { color: '#ec7575' }}>Balance: ${this.sum()}</div>
          <Operations pushTransaction={this.pushTransaction} balance={this.sum} />
          <div className="bodyGrid">
            <Transactions data={data} />
            <div className="breakDown">
              <div className="breakTitle">Breakdown:</div>
              <Breakdown data={data} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;