console.log('app.js is running!!');

const app = {
        title: 'Indecision App V 0.0.1',
        subtitle: 'Put your life in the hands of a Computer!!!',
        options: []
}
  

const submitMyForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option != ''){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    
    
    rerender();
};

const emptyOptions = () => {
    app.options = [];
    rerender();
}

const decide = () => {
    const myNum = Math.floor(Math.random() * app.options.length);
    console.log(myNum);
    alert(app.options[myNum]);
}


const appRoot = document.getElementById('app');

const  rerender = () =>{
    //JSX - JavaScript XML
    const template = (
        <div>  
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >= 1 ? 'Here are your options' : 'No options'}</p>
            <button onClick={emptyOptions}>Remove All Options</button>
            <button disabled={app.options.length < 2} onClick={decide}>Make My Decision</button>
            <ol>
                {
                    app.options.map((option) => <li key={app.options.indexOf(option)}>{option}</li>)
                }
                
            </ol> 
            <form onSubmit={submitMyForm}>
                <input type="text" name="option"/>
                <button>SUBMIT</button>
            </form>
        </div>
    ); 
    ReactDOM.render(template, appRoot)
}
rerender();