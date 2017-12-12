class IndesicionApp extends React.Component{
    
    render(){
        const title = 'Indecision App Version 1.0.3';
        const subtitle = 'Put your life in the hands of a computer!';
        const options = ['thing 1', 'thing 2', 'thing four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        )
    }
}


class Header extends React.Component{
    render() {
        return(
            <div>
                <h1 id='title'>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    makeDecision(){
        alert( 'HI');
    }
  
   render(){
        return(
            <div>
                <button onClick={this.makeDecision}>What should I do?</button>
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return <p>{this.props.option}</p>
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll(){
        console.log(this.props.options);
        //this.props.options = [];
        //this.render();
    }
    render(){
        return(
            <div>
                {this.props.options.map((option) => <Option key={option} option={option}/>)}
                <Option />
                <button onClick={this.removeAll}>Remove All</button>
            </div>
        )
    }
}

class AddOption extends React.Component{
    submitMyForm (e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option != ''){
            alert('You added ' + option);
        }else{
            alert('you didn\'t add anything.');
        }
    
    }
    render(){
        return(
            <div>
                 <form onSubmit={this.submitMyForm}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                 </form>
            </div>
        )
    }
}


ReactDOM.render(<IndesicionApp />, document.getElementById('app'));