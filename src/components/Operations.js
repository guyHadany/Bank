import React, { Component } from 'react';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            Amount: '',
            Vendor: '',
            Category: '',
            showInsuffiecientMessage: false
        }
    }

    deposit = () => {
        this.props.pushTransaction({
            amount: Number(this.state.Amount),
            vendor: this.state.Vendor,
            category: this.state.Category
        })
    }

    Withdraw = () => {
        if ((this.props.balance() - this.state.Amount) >= 500) {
            this.props.pushTransaction({
                amount: Number(`-${this.state.Amount}`),
                vendor: this.state.Vendor,
                category: this.state.Category
            })
        } else {
            this.setState({
                showInsuffiecientMessage: true
            })
            setTimeout(() => {
                this.setState({
                    showInsuffiecientMessage: false
                })
            }, 3000);
        }
    }

    inputHandler = (e) => {

        const value = e.target.value
        const name = e.target.name

        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className='inputSection'>
                <input type='number' name='Amount' placeholder='Amount' onChange={this.inputHandler}></input>
                <input type='text' name='Vendor' placeholder='Vendor' onChange={this.inputHandler}></input>
                <input type='text' name='Category' placeholder='Category' onChange={this.inputHandler}></input>
                <br></br>
                <button className='Deposit' onClick={this.deposit}>Deposit</button>
                <button className='Withdraw' onClick={this.Withdraw}>Withdraw</button>
                <div id="message">{this.state.showInsuffiecientMessage ? "Insufficient Funds" : null}</div>

            </div>
        )
    }
}
export default Operations