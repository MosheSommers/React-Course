class IndesicionApp extends React.Component{
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);

        this.state = {
            options: []
        }
    }
    deleteOptions() {
        this.setState(() => ({options:[]}));
    }
    deleteOption(optionToRemove){
        this.setState((prevstate) => ({
        options : prevstate.options.filter((option) => optionToRemove !== option)          
        }));
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
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
           
    }
    render(){
        const version = '1.0.4';
        const subtitle = 'Put your life in the hands of a computer!';
        
        return(
            <div>  
                <User name={'Moshe'} age={30} />
                <Header version ={version}  subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    makeDecision ={this.makeDecision}
                />
                <Options 
                    options={this.state.options} 
                    deleteOption = {this.deleteOption}
                    removeAll={this.deleteOptions}
                />
                <AddOption 
                    addOption={this.addOption}
                />
            </div>
        )
    }
}


const Header = (props) => {
    return(
        <div>
            <h1 id='title'>{props.title} {props.version}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title : 'Indecision',
    version: '0.1.0'
};
const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.makeDecision}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};
   
const Option = (props) => {
        return (
            <div>
              <p>{props.option}</p>
              <button 
                    onClick={
                        (e) => {
                            props.deleteOption(props.option)
                        } 
                    }
                >
                    Remove
                </button>
            </div>
        );
};

const Options = (props) => {
    return(
        <div>
            {
                props.options.map((option) => (
                    <Option 
                        key={option}
                        option={option}
                        deleteOption={props.deleteOption}
                    />
                ))
            }
            <button onClick={props.removeAll}>Remove All</button>
        </div>
    )
};

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
        this.setState(() => ({error}));
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

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};
ReactDOM.render(<IndesicionApp />, document.getElementById('app'));