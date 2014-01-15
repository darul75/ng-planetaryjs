ng-planetaryjs [![NPM version](https://badge.fury.io/js/ng-planetaryjs.png)](http://badge.fury.io/js/ng-planetaryjs) [![Build Status](https://travis-ci.org/darul75/ng-planetaryjs.png?branch=master)](https://travis-ci.org/darul75/ng-planetaryjs) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/ng-planetaryjs/counters/views.png)](https://sourcegraph.com/github.com/darul75/ng-planetaryjs)
=====================

Angular directive for PlanetaryJs integration.

http://planetaryjs.com/

Demo
------------
http://darul-demo.herokuapp.com/globe-twitter

Installation
------------

Using npm:

```
npm install ng-planetaryjs
```


How to use it
-------------

You should already have script required for Angular

```html
<script type="text/javascript" src="angular.min.js"></script>
```

to the list above, you should add:

```html
<script type="text/javascript" src="ng-planetaryjs.min.js"></script>
```

Then, inject `ngPrettyJson` in your application module:

```javascript
angular.module('myApp', ['ngPlanetaryJs']);
```

and then just add an `canvas` with `planetaryjs` directive name attribute and `options` scope variable attribute.

```html
canvas(planetaryjs options='options' width='1000' height='1000')
```

`options` is your scope json variable.

```javascript
 $scope.options = {
  plugins: {
    autorotate: {
      degree : 2
    },
    earth: {
      topojson: { file:   'world-110m.json' },
      oceans:   { fill:   '#C59824' },            
      land:     { fill:   '#2B4F81' },
      borders:  { stroke: '#eeeeee' , lineWidth: 0.3}
    },
    pings: {
      color: 'yellow', ttl: 5000, angle: 10
    },
    zoom: { scaleExtent: [100, 300] }
  }
}
```

### Options

* `options`: planetaryjs plugins options, available here http://planetaryjs.com/documentation/

### Install

You can run the tests by running

```
npm install
```

### See it

> node app.js

Open browser http://localhost:5000/demo


assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```

## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.




