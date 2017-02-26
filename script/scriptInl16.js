class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.btnClickGetData = this.btnClickGetData.bind(this);
    }
    
    
    btnClickGetData(event) { 
        let self = this;
        fetch('http://forverkliga.se/JavaScript/api/simple.php?world=whatever')
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log('json', json);
            self.setState({
                data: json
            })
             
        })
    }

    render() {
        return (
            <div>
            <GetDataBtn clickEvent={ this.btnClickGetData } />
            <GetDataMessage />
            <ObjList data={this.state.data}></ObjList>
            </div>
        );
    }
}


class GetDataBtn extends React.Component {
render() {
    return (
        <button onClick = { this.props.clickEvent }>
            Hämta data
        </button>
    );
    }
}

class GetDataMessage extends React.Component {
render() {
    return (
        <div>
           Data hämtas...
            
        </div>
    );
    }
}

    
class ObjList extends React.Component {
render() {
    const list = this.props.data.map(
        obj =><li key={obj.name}>{obj.name}{obj.continent}{obj.population}{obj.pFemale}</li>);
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );  
    }
}

class SumObj extends React.Component {
render() {
    return (
        <p>sumobj</p>
    );
    }
}

ReactDOM.render(<App />, document.getElementById('App'));