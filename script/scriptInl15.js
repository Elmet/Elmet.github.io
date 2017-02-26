class AddApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue1: ''
            , inputValue2: ''
            , result: ''
        }
        this.inputChangeAndAdd = this.inputChangeAndAdd.bind(this);
    }
    inputChangeAndAdd(event) {
        console.log('inputChangeAndAdd');
        this.setState({
            inputValue1: event.target.value
            , inputValue2: event.target.value
            , result: inputValue1 + inputValue2
        });
    }
    render() {
        return ( < div id = "addApp" > < NumbersToAdd changeEvent = {
                this.inputChangeAndAdd
            }
            /> < Sum sum = {
                this.state.result
            }
            />
            < /div>);
    }
}
class NumbersToAdd extends React.Component {
    render() {
        return ( < form > < input id = "inputValue1"
            type = "number"
            placeholder = "Mata in ett första tal till din addition"
            onChange = {
                this.props.changeEvent
            }
            /> < input id = "inputValue2"
            type = "number"
            placeholder = "Mata in nästa tal till din addition"
            onChange = {
                this.props.changeEvent
            }
            />  < /form>)
    }
}
class Sum extends React.Component {
    render() {
        return ( < div id = "sum" > {
            this.props.sum
        } < /div>)
    }
}
ReactDOM.render( < AddApp / > , document.getElementById('addApp'));