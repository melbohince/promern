'use strict';

var contentNode = document.getElementById('contents');

/*var component = <h1>Hello World! Project Shuttle is born.</h1>;*/

var continents = ['Africa', 'Asia', 'America', 'Europe'];

var message = continents.map(function (c) {
  return 'Hello ' + c + '! ';
}).join('');

var component = React.createElement(
  'p',
  null,
  message
);

ReactDOM.render(component, contentNode);