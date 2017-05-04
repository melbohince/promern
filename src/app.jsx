const contentNode = document.getElementById('contents')

/*var component = <h1>Hello World! Project Shuttle is born.</h1>;*/

const continents = ['Africa','Asia','America','Europe'];

const message = continents.map(c => `Hello ${c}! `).join('');

const component = <p>{message}</p>

ReactDOM.render(component, contentNode);
