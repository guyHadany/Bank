import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        return (
            <div className='transactionBox'>
                {this.props.data.map((d, i) => <Transaction key={i} data={d}/>)}
            </div>
        )
    }
}
export default Transactions