import React, { Component } from 'react';

class Breakdown extends Component {

    // showDetails = (id, category) => {
    //     let arr = this.props.data.filter(a => a.category === category).map(a => )
    //     console.log(arr)
    // }

    breakdown = (data) => {
        let test = {}
        for (let d of data) {
            if (test[d.category]) {
                test[d.category] += d.amount
            } else {
                test[d.category] = d.amount
            }

        }
        return Object.entries(test)
    }

    render() {
        return (
            <div>
                {this.breakdown(this.props.data).map((a, i) =>
                     <div id='category' key={i}><span className='vendor'>{a[0]}:</span><span className='amount'>${a[1]}</span></div>)}
            </div>
        )
    }
}
export default Breakdown

