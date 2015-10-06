# react-universal-analytics

### React Google Universal Analytics component

React universal analytics is a lightweight JavaScript library with simple API for easy add tracking users for ReactJS/Reflux apps, 
catch errors in apps and use all features of Universal Analytics in react.


## Installation
This module is installed:

```bash
npm i react-universal-analytics
```


## Usage

### With react-router

```
var Router = require('react-router');
var ga = require('react-universal-analytics');

window.onload = function () {
    ga.init('UA-XXXXXXXX-X');
    Router.run(routes, function (Handler) {
        ga.pageview(state.pathname);
        React.render(<Handler />, document.body);
    });
};
```


## Examples

```
var ga = require('react-universal-analytics');
```



## License

The MIT License (MIT)
