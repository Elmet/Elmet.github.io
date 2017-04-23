class AddApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input1: 0,
            input2: 0,
            result: 0,
            errorMessage: ''
        };  
        
        this.inputChangedThenAdd = this.inputChangedThenAdd.bind(this);
        this.add = this.add.bind(this);
    }
    
    inputChangedThenAdd() {
        let value1 = document.getElementById('input1').value;
        let value2 = document.getElementById('input2').value;
        
        this.setState({
            input1: value1,
            input2: value2
        }, () => this.add()); 
    }
    
    
    add(){
        let value1 = parseFloat(this.state.input1);
        let value2 = parseFloat(this.state.input2);
        
        if(Number.isNaN(value1) || Number.isNaN(value2))
            { this.setState({errorMessage: 'Tyvärr endast nummer(heltal) är tillåtna', result: '?' });
        }
        
        else
            { 
            let sum = 0; 
            sum = value1 + value2; 
         
            this.setState({ result: sum, errorMessage: ''});
        }
    }
        
    render(){
        return( 
            <div><h2>Addera</h2>
            <form>
                <input className='input' id='input1' value={this.state.input1} onChange={this.inputChangedThenAdd} /><span> + </span>
                <input className='input' id='input2' value={this.state.input2} onChange={this.inputChangedThenAdd} /><span> = </span>
                <Results result={this.state.result} />
                </form>
                <p> {this.state.errorMessage}</p>
            </div>
        );
    }
}


class Results extends React.Component {
    render() {
        return ( 
            <input className='result' value={this.props.result} />
        );
    }
}

ReactDOM.render(<AddApp />, document.getElementById('addApp')
);