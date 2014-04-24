darwin
======


AngularJS directives for Boostrap fast protoyping

Installation
---------------------------------------

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
**Container**
---------------------------------------

```
<container></container>
```
Instead of
```
<div class="container"></div>
```





**Container Fluid**
---------------------------------------
```
<container-fluid></container-fluid>
```
Instead of
```
<div class="container-fluid"></div>
```



**Row**
---------------------------------------
```
<row></row>
```
Instead of
```
<div class="row"></div>
```

**Columns**
---------------------------------------
* @type
* @size
* @offset (optional)
```
<cl type="md" size="2"></cl>
```
Instead of
```
<div class="col-md-2"></div>
```
----------
offset
```
<cl type="md" size="2" offset="2"></cl>
```
Instead of
```
<div class="col-md-2 col-md-offset-2"></div>
```

**Panel**
---------------------------------------
* @title  (optional)
* @footer (optional)
* @type (optional)

```
<panel>Content</panel>
```
Instead of
```
<div class="panel"><div class="panel-body">Content</div></div>
```
----------
With title and footer
```
<panel title="Heading" footer="foo" type="primary">Content</panel>
```
Instead of
```
<div class="panel panel-primary">
    <div class="panel-heading"><h3 class="panel-title">Heading</h3></div>
    <div class="panel-body">Content</div>
    <div class="panel-footer">foo</div>
</div>
```

**Jumbotron**
---------------------------------------
```
<jumbotron></jumbotron>
```
Instead of
```
<div class="jumbotron"></div>
```


**Well**
---------------------------------------
```
<well></well>
```
Instead of
```
<div class="well"></div>
```


**Label**
---------------------------------------
* @type
```
<lbl type="primary"></lbl>
```
Instead of
```
<span class="label label-primary"></span>
```

**List Group**
---------------------------------------
```
<list-group>
  <li>Cras justo odio</li>
  <li class="active">Dapibus ac facilisis in</li>
  <li>Morbi leo risus</li>
</list-group>
```
Instead of
```
<ul class="list-group">
  <li class="list-group-item">Cras justo odio </li>
  <li class="list-group-item active">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
</ul>
```

**Icon**
---------------------------------------
```
<icon name="star"></icon>
```
Instead of
```
<span class="glyphicon glyphicon-star"></span>
```


**Input Group**
---------------------------------------
```
<input-group>
    <addon>@</addon>
    <input type="text" class="form-control">
</input-group>
```
Instead of
```
<div class="input-group input-group-lg">
  <span class="input-group-addon">@</span>
  <input type="text" class="form-control">
</div>
```


**Input Group Button**
---------------------------------------
```
<input-group>
    <input type="text" class="form-control">
    <addon-button>GO</addon-button>
</input-group>
```
Instead of
```
<div class="input-group">
    <input type="text" class="form-control">
    <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
    </span>
</div>
```

**Button Group**
---------------------------------------
```
<button-group>
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Rigth</button>
</button-group>
```
Instead of
```
<div class="btn-group">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Rigth</button>
</div>
```

**Button Group Vertical**
---------------------------------------
```
<button-group-vertical>
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Left</button>
</button-group/vertical>
```
Instead of
```
<div class="btn-group-vertical">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Left</button>
</div>
```

**Button Group Vertical**
---------------------------------------
```
<button-group-vertical>
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Left</button>
</button-group/vertical>
```
Instead of
```
<div class="btn-group-vertical">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Left</button>
</div>
```

**Alert**
---------------------------------------
```
<alert type="success">Content</alert>
```
Instead of
```
<div class="alert alert-success">Content</div>
```


