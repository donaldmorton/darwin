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
* @xs
* @sm
* @md
* @lg
* @xs-of
* @sm-of
* @md-of
* @lg-of
```
<cl sx="6" md="4"></cl>
```
Instead of
```
<div class="col-xs-6 col-md-4"></div>
```
----------
offset
```
<cl xs="6" xs-of="1" md="4" md-of="2"></cl>
```
Instead of
```
<div class="col-xs-6 col-xs-offset-1 col-md-4 col-md-offset-2"></div>
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
    <addon-button>
        <button class="btn btn-default" type="button">Go!</button>
    </addon-button>
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

**Page Header**
---------------------------------------
```
<page-header>Content</page-header>
```
Instead of
```
<div class="page-header">
  <h1>Example page header <small>Subtext for header</small></h1>
</div>
```

**Progress Bar**
---------------------------------------
```
<progress-bar max="100" current="85" animate="true" striped="true"></progress-bar>
```
Instead of
```
<div class="progress progress-striped active">
  <div class="progress-bar"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
    <span class="sr-only">45% Complete</span>
  </div>
</div>
```

**Modals**
---------------------------------------
```
<modal myid="myDarwinModal" title="My Modal Title" buttontext="This is awesome!">This is my modals content.</modal>
```
Instead of
```
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
```