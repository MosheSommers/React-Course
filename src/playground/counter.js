// let count = 0;
// const addOne =  () => {
//     count++;
//     renderMyApp();
// }

// const minusOne =  () => {
//     if(count > 0){
//         count--;
//         renderMyApp();
//     }
    
// }

// const reset = () => {
//     count = 0;
//     renderMyApp();
// }



// const appRoot = document.getElementById('app');



// const renderMyApp = () => {
//     const templateTwo = (
//         <div>
//             <h1 id="count">COUNT: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>RESET</button>
//         </div>
//     ) ;
//     ReactDOM.render(templateTwo, appRoot);

// }

// renderMyApp();

class CounterApp extends React.Component{
     constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
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
         this.setState(() => {
            return {
                 count: 0
             };
         });
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

ReactDOM.render(<CounterApp />, document.getElementById('app'));