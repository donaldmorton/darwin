darwin = angular.module('darwin',[]);

darwin.directive('container',function(){
	return {
		restrict:'E',
		scope:false,
		transclude:true,
		template:'<div class="container" ng-transclude></div>'
	}
});

darwin.directive('containerFluid',function(){
	return {
		restrict:'E',		
		transclude:true,
		template:'<div class="container-fluid" ng-transclude></div>'
	}
});

darwin.directive('row',function(){
	return {
		restrict:'E',
		transclude:true,
		template:'<div class="row" ng-transclude></div>'
	}
});

darwin.directive('cl',function(){
	return {
		restrict:'E',
		transclude:true,
		scope: {
			xs:'@',
			sm:'@',
			md:'@',
			lg:'@',
			xsOf:'@',
			smOf:'@',
			mdOf:'@',
			lgOf:'@'
		},
		template:'<div ng-transclude></div>',
		link: function(scope,element,attrs){
			if(attrs.xs){
				element.addClass('col-xs-'+attrs.xs)
			}
			if(attrs.sm){
				element.addClass('col-sm-'+attrs.sm)
			}
			if(attrs.md){
				element.addClass('col-md-'+attrs.md)
			}
			if(attrs.lg){
				element.addClass('col-lg-'+attrs.lg)
			}
			if(attrs.xsOf){
				element.addClass('col-xs-offset-'+attrs.xsOf)
			}
			if(attrs.smOf){
				element.addClass('col-sm-offset-'+attrs.smOf)
			}
			if(attrs.mdOf){
				element.addClass('col-md-offset-'+attrs.mdOf)
			}
			if(attrs.lgOf){
				element.addClass('col-lg-offset-'+attrs.lgOf)
			}
		}
	}
});

darwin.directive('panel',function(){
	return {
		restrict:'E',
		transclude:true,
		scope: {
			title:'@',
			footer:'@',
			type:'@'
		},
		template:'<div class="panel"><div class="panel-body" ng-transclude></div></div>',
		link: function(scope,element,attrs){
			if(attrs.type){
				element.children().addClass('panel-'+attrs.type);
			}
			else{
				element.children().addClass('panel-default');
			}
			if(attrs.title){
				element.children().prepend('<div class="panel-heading"><h3 class="panel-title">'+attrs.title+'</h3></div>');				
			}			

			if(attrs.footer){
				element.children().append('<div class="panel-footer">'+attrs.footer+'</div>');				
			}
		}
	}
});

darwin.directive('jumbotron',function(){
	return {
		restrict:'E',
		transclude:true,
		template:'<div class="jumbotron" ng-transclude></div>'
	}
});

darwin.directive('well',function(){
	return {
		restrict:'E',
		transclude:true,
		template:'<div class="well" ng-transclude></div>'
	}
});


darwin.directive('controlGroup',function(){
	return {
		restrict:'E',
		link: function(scope,element){
			element.wrap('<div class="control-group"></div>');
		}
	}
});

darwin.directive('buttonGroup',function(){
	return {
		restrict:'E',
		link: function(scope,element){
			element.addClass('btn-group');
		}
	}
});


darwin.directive('inputGroup',function(){
	return {
		restrict:'E',
		link: function(scope,element){
			element.addClass('input-group');
		}
	}
});

darwin.directive('addon',function(){
	return {
		restrict:'E',
		link: function(scope,element){
			element.addClass('input-group-addon');
		}
	}
});

darwin.directive('addonButton',function(){
	return {
		restrict:'E',
		link: function(scope,element){
			element.addClass('input-group-btn');
		}
	}
});

darwin.directive('buttonGroupVertical',function(){
	return {
		restrict:'E',
		link: function(scope,element){
			element.addClass('btn-group-vertical');
		}
	}
});

darwin.directive('icon',function(){
	return {
		restrict:'E',
		scope:{
			name:'@'
		},
		template:'<i></i>',
		link: function(scope,element,attrs){
			element.addClass('glyphicon glyphicon-'+attrs.name);
		}
	}
});

darwin.directive('controls',function(){
	return {
		restrict:'E',
		link: function(scope,element){
			element.wrap('<div class="controls"></div>');
		}
	}
});

darwin.directive('lbl',function(){
	return {
		restrict:'E',
		scope:{
			type:'@'
		},
		transclude: true,
		template:'<span ng-transclude></span>',
		link: function(scope,element,attrs){
			if(attrs.type){
				element.addClass('label label-'+attrs.type);			
			}else{
				element.addClass('label label-default');							
			}
		}
	}
});

darwin.directive('listGroup',function(){
	return {
		restrict:'E',
		scope:{
			type:'@'
		},
		transclude: true,
		template:'<ul class="list-group" ng-transclude></ul>',
		link: function(scope,element,attrs){
	        var childrens = element.children().children();
            angular.forEach(childrens, function(elem) {
            	active = angular.element(elem).hasClass('active')?'active':'';
            	angular.element(elem).addClass('list-group-item '+active);
            });
        }
	}
});


darwin.directive('alert',function(){
	return {
		restrict:'E',
		scope:{
			type:'@'
		},
		transclude: true,
		template:'<div ng-transclude></div>',
		link: function(scope,element,attrs){
			element.children().addClass('alert');
			if(attrs.type){
				element.children().addClass('alert-'+attrs.type);
			}
		}
	}
});
darwin.directive('pageHeader', function () {
    return {
        restrict: 'E',
        scope: false,
        transclude: true,
        template: '<div class="page-header"><h1 ng-transclude></h1></div>'
    }
});
darwin.directive('progressBar', function () {
    return {
        restrict: 'E',
        scope: {
            type: '@'
        },
        template: '\
        <div class="progress">\
            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">\
                <span></span>\
            </div>\
        </div>',
        link: function (scope, element, attrs) {

            var progressBarWrapper = element.children();
            var progressBarElement = progressBarWrapper.children();
            var labelElement = progressBarElement.children();

            if (attrs.max) {
                progressBarElement.attr('aria-valuemax', attrs.max);
            }

            if (attrs.current) {
                progressBarElement.attr('aria-valuenow', attrs.current);
                progressBarElement.css("width", attrs.current + "%");
            }

            if (attrs.animate) {
                progressBarWrapper.addClass("active");
            }

            if (attrs.striped) {
                progressBarWrapper.addClass("progress-striped");
            }

            if (attrs.label) {
                labelElement.html(attrs.label);
            }
        }
    }
});
darwin.directive('modal', function () {
    return {
        restrict: 'E',
        scope: {
            type: '@'
        },
        transclude: true,
        template: '\
        <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\
            <div class="modal-dialog">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                        <h4 class="modal-title"></h4>\
                    </div>\
                    <div class="modal-body" ng-transclude>\
                    </div>\
                    <div class="modal-footer">\
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                        <button type="button" class="btn btn-primary"></button>\
                    </div>\
                </div>\
            </div>\
        </div>',
        link: function (scope, element, attrs) {
            var modalWrapper = element.children();
            var modalDialog = modalWrapper.children();
            var modalContent = modalDialog.children();
            var modalHeader = modalContent.children().eq(0);
            var modalHeaderH4 = modalHeader.children().eq(1);
            var modalFooter = modalContent.children().eq(2);
            var modalFooterButton = modalFooter.children().eq(1);

            if (attrs.myid) {
                modalWrapper.attr('id', attrs.myid);
                modalWrapper.attr('aria-labelledby', attrs.myid + "Label");
                modalHeaderH4.attr('id', attrs.myid + "Label");
            }

            if (attrs.title) {
                modalHeaderH4.html(attrs.title);
            }

            if (attrs.buttontext) {
                modalFooterButton.html(attrs.buttontext);
            }
        }
    }
});