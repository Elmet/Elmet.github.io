const lista = [
    {namn: 'dammsugare'},
    {namn: 'semla'},
    {namn: 'wienerbröd'},
    {namn: 'hallongrotta'}
];

class Kaklista extends React.Component {
    render() {
        const nyLista = this.props.lista.map(
        obj => (<li key={obj.namn}>{obj.namn}</li>)
    );
    return (<ol>{nyLista}</ol>);
    }
}

ReactDOM.render(
<Kaklista lista={lista} />,
    document.getElementById('list')
);
