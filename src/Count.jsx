import { render } from '@testing-library/react';
import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        this.IncNum = this.IncNum.bind(this);
        this.DecNum = this.DecNum.bind(this);
    };


    IncNum = () => {

        //this.setState({ });
        console.log("increment number 1")
        let count = this.state.counter + 1;

        this.setState({ counter: count })
    }

    DecNum = () => {

        //this.setState({ });
        console.log("Decrement number1 ")
        if (this.state.counter >= 1) {
            let count = this.state.counter - 1;
            this.setState({ counter: count });
        }

    }

    render() {
        return (
            <div className="main">

                <h2>Count is :{this.state.counter}</h2> <br></br>
                <button className="btn" onClick={this.IncNum}><AddIcon /></button>
                <button className="btn" onClick={this.DecNum}><RemoveIcon /></button>


            </div>
        )
    }
}

export default Count;