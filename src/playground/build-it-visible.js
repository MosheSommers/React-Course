class BuildItApp extends React.Component{
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = {
           title: 'Toggle Details',
           details:'',
           showButton: 'Show Details',
           visible:false
        }
    }
    showDetails(){
        if(!this.state.visible){
             this.setState((prevState) => {
                return {
                    showButton:  'Hide Details',
                    visible:  !prevState.visible,
                    details:'These are some details YAY'
                };
             });
        }else{
              this.setState((prevState) => {
                return {
                    showButton:  'Show Details',
                    visible:  !prevState.visible,
                    details:''
                };
            });
        }
        
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button  onClick={this.showDetails}>{this.state.showButton}</button>
                <p>{this.state.details}</p>
            </div>
        );
    }
}

ReactDOM.render(<BuildItApp/>, document.getElementById('app'));



// const app = {
//         title: 'Toggle Details',
//         details:'These are some details YAY',
//         visible:false
// }
  

// const showDetails = () => {
//     app.visible = !app.visible
//     rerender();
// };



// const appRoot = document.getElementById('app');

// const  rerender = () =>{
//     //JSX - JavaScript XML
//     const template = (
//         <div>  
//             <h1>{app.title}</h1>
//             <button  onClick={showDetails}>{app.visible ? 'Hide Details' : 'Show Details'}</button>
//              {app.visible && <p>{app.details}</p>}
//         </div>
//     ); 
//     ReactDOM.render(template, appRoot)
// }
// rerender();