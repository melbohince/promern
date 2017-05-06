const contentNode = document.getElementById('contents')

/*var component = <h1>Hello World! Project Shuttle is born.</h1>;*/

const continents = ['Africa','Asia','America','Europe'];

//add some text to each and change array to a string
const message = continents.map(c => `Hello ${c}?`).join(' ');

//define the react component
const component = <p>{message}</p>

ReactDOM.render(component, contentNode);
