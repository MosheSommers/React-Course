class CounterApp extends React.Component{
     constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count :props.count
        };
    }
    add() {
         this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
         });
    }
    minus() {
       this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
         });
    }
    reset() {
         this.setState(() => ({count: 0}));
    }
    render(){
        return(
            <div>
                 <h1>Count: {this.state.count}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.minus}>-1</button>
                <button onClick={this.reset}>RESET</button>
            </div>
        );
    }
}
CounterApp.defaultProps = {
    count: 1000
}
ReactDOM.render(<CounterApp count={-11}/>, document.getElementById('app'));