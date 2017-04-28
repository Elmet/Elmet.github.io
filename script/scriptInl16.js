class App extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.state = {
            data: []
        };
    }
    
    render() {
        return (
            <div>
            <h2 id='headline'>Country facts</h2>
            
            <CountryTable list={this.state.data} onDelete={this.deleteListItem} />
            </div>
        );
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.getData()
        }, 3000
        );
    }
    
    getData() { 
        let self = this;
        fetch('https://forverkliga.se/JavaScript/api/simple.php?world=whatever')
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            //console.log('json', json);
            self.setState({
                data: json
            });
        });
    }
    
    deleteListItem(event){
        event.stopPropagation();
        let tableRow = event.target.parentElement.parentElement;
        
        let list = this.state.data;
        let newList = list.filter(x => x.name !== tableRow.id);
        this.setState({
            data: newList
        });
    } 
}

class CountryTable extends React.Component {
    constructor(props){
        super(props);
        this.state = { count: 0 };
    }
    render() {
        const tableRows = this.props.list.map(x =>
        <TableRow key={x.name} item={x} clickEvent=
        {this.props.onDelete} />
        );
        
        if(tableRows.length === 0) {
            return (
            <div id='loadMessage'>Loading data...</div>)
        }
        else {
        return (
            <table className="countryFacts">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Continent</th>
                    <th>Population</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
                <tr key="sumRows" id="sum-row">
                    <td colSpan="3">Sum number of countries: {tableRows.length}</td>
                </tr>
            </tbody>
        </table>);
        }
    }
}

class TableRow extends React.Component {
    constructor (props) {
        super(props);  
        
        this.state = {item: this.props.item};
    }
    
    render() {
        const item = this.state.item;
        let tableRow = (<tr key={item.name} id={item.name}>
            <td>{item.name}</td>
            <td>{item.continent}</td>
            <td>{item.population}</td>
            <td><button onClick={this.props.clickEvent}>Delete table row</button></td>
            </tr>);
        
        return tableRow;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));