import React from 'react'

class Calculator extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            numberInput1: '',
            numberInput2: '',
            operator: '+',
            result: '',
            warning: ''
        }
        //this.state = {...props}
    }

    inputNumber1Change = (event) => {
        this.setState({ numberInput1: event.target.value })
    }

    inputNumber2Change = (event) => {
        this.setState({ numberInput2: event.target.value })
    }

    operatorChange = (event) => {
        this.setState({ operator: event.target.value })
    }

    evaluateNumbers = () => {
        if ((isNaN(this.state.numberInput1) || this.state.numberInput1 === '') ||
            (isNaN(this.state.numberInput2) || this.state.numberInput2 === '')) {
            this.setState({ warning: 'Please provide a valid number for both operands.' })
            this.setState({ result: '' })
        }
        else {
            this.setState({ warning: '' })
            switch (this.state.operator) {
                case '+':
                    this.setState({ result: (Number(this.state.numberInput1) + Number(this.state.numberInput2)) })
                    break
                case '-':
                    this.setState({ result: (Number(this.state.numberInput1) - Number(this.state.numberInput2)) })
                    break
                case '*':
                    this.setState({ result: (Number(this.state.numberInput1) * Number(this.state.numberInput2)) })
                    break
                default:
                    this.setState({ result: (Number(this.state.numberInput1) / Number(this.state.numberInput2)) })

            }
        }
    }
    // componentDidMount

    // render
    render() {
        return (
            <div>
                <input onChange={this.inputNumber1Change} />
                <select onChange={this.operatorChange}>
                    <option value="+"> + </option>
                    <option value="-"> - </option>
                    <option value="*"> * </option>
                    <option value="/"> / </option>
                </select>
                <input onChange={this.inputNumber2Change} />
                <button onClick={this.evaluateNumbers}> = </button>
                <input defaultValue={this.state.result} />
                <div>{this.state.warning ? this.state.warning : null}</div>
            </div>
        )
    }
}

export default Calculator