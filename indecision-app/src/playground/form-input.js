console.log('Form submit example');

const app = {
    title: 'Form title',
    subtitle: 'Subtitle',
    options: [],
    printOption: function () {
        // Arrow function
        return this.options.map((option) => {
            return <li key={option.toString()}>{option}</li>;
        });
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const resetData = () => {
    app.options = [];
    render();
};
const appRoot = document.getElementById('app');

// Arrays in JSX
const arrayNumbers = [55, 100, 1000];

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p> {app.subtitle}</p>}
            {app.options.length && <span>Length: {app.options.length}</span>}
            <ol>{app.options.map((option) => <li key={option.toString()}>{option}</li>)}</ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            <button onClick={resetData}>Reset</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();