darwin
======

AngularJS directives for Boostrap fast protoyping

Installation
---------------------------------------

* Download: [zip](https://github.comd/donaldmorton/darwin/)
* [Bower](https://github.com/twitter/bower/): `bower install darwin.js`
* Git: `git clone https://github.com/donaldmorton/darwin.js`


Requirements
---------------------------------------
* AngularJS
* Bootstrap


Setup
---------------------------------------

First, include the main JavaScript file in the `<head>` of your HTML document:

```
<script src="darwin.js"></script>
```

Next, add the module:

```
var myAppModule = angular.module('MyApp', ['darwin']);
```

Usage
---------------------------------------
```
<container></container>
<div class="container" ng-transclude></div>
```

