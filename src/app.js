class IndesicionApp extends React.Component{
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);

        this.state = {
            options: []
        }
    }
    deleteOptions() {
        this.setState(() => {
            return {
                options:[]
            }
        })
    }
    makeDecision(){
            const myNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[myNum]);
    }
    addOption(option){
        if(!option){
            return 'Please enter a valid value';
        }else if(this.state.options.indexOf(option) > -1) {
            return `${option} already exists`;
        }
        this.setState((prevState) =>{
            return{
                options: prevState.options.concat(option)
            }
        })
    }
    render(){
        const title = 'Indecision App Version 1.0.4';
        const subtitle = 'Put your life in the hands of a computer!';
        
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    makeDecision ={this.makeDecision}
                />
                <Options 
                    options={this.state.options} 
                    removeAll={this.deleteOptions}
                />
                <AddOption 
                    addOption={this.addOption}
                />
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
   
   render(){
        return(
            <div>
                <button 
                    onClick={this.props.makeDecision}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
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
    render(){
        return(
            <div>
                {this.props.options.map((option) => <Option key={option} option={option}/>)}
                <Option />
                <button onClick={this.props.removeAll}>Remove All</button>
            </div>
        )
    }
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.submitMyForm = this.submitMyForm.bind(this);
        this.state = {
            error:undefined
        }
    }
    submitMyForm (e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.addOption(option);
        this.setState(() => {
            return {
                error
            };
        });
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitMyForm}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndesicionApp />, document.getElementById('app'));