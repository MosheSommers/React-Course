class BuildItApp extends React.Component {
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = {
           title: 'Toggle Details',
           details:'These are some details YAY',
           visible:false
        }
    } 
    showDetails(){
            this.setState((prevState) => {
            return {
                visible:  !prevState.visible
            };
            }); 
    }
    render(){
        return(
            <div> 
                <h1>{this.state.title}</h1>
                <button  onClick={this.showDetails}>{this.state.visible ? 'Hide' : 'Show'} Details</button>
                {this.state.visible && <p>{this.state.details}</p>}
            </div>
        );
    }
} 

ReactDOM.render(<BuildItApp/>, document.getElementById('app'));