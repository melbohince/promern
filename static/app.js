'use strict';

var contentNode = document.getElementById('contents');

/*var component = <h1>Hello World! Project Shuttle is born.</h1>;*/

var continents = ['Africa', 'Asia', 'America', 'Europe'];

//add some text to each and change array to a string
var message = continents.map(function (c) {
  return 'Hello ' + c + '?';
}).join(' ');

//define the react component
var component = React.createElement(
  'p',
  null,
  message
);

ReactDOM.render(component, contentNode);