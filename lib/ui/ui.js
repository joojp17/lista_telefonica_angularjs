angular.module("ui",[]);

angular.module("ui").run(function($templateCache){
    $templateCache.put("view/accordion.html",'<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});

angular.module("ui").directive("uiAccordions", function(){
    return{
        controller: function($scope, $element, $attrs){
            var accordions=[];

            this.registerAccordion = function(accordion){
                accordions.push(accordion);
            };

            this.closeAll = function(){
                accordions.forEach(function(accordion){
                accordion.isOpened = false;
                });
            }
        }
    };
});

angular.module("ui").directive("uiAccordion", function(){
    return{
        templateUrl: "view/accordion.html",
        restrict: "E",
        transclude: true,
        scope:{
            title:"@"
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, ctrl){
            ctrl.registerAccordion(scope);
            scope.open = function(){
                ctrl.closeAll();
                scope.isOpened = !scope.isOpened;
            };
        }
    };
});

angular.module("ui").directive("uiPhone", function(){
    return{
        require:"ngModel",
        link: function(scope, element, attrs, ctrl){
            var _formatPhone = function(_phone){
                if(!!ctrl.$viewValue) _phone = _phone.replace(/[^0-9]+/g, "");
                if(_phone.length > 2){
                    _phone = "(" + _phone.substring(0,2) + ") " + _phone.substring(2);
                }
                if(_phone.length > 9){
                    _phone = _phone.substring(0,9) + "-" + _phone.substring(9);
                }
                if(_phone.length > 14){
                    _phone = _phone.replace("-","");
                    _phone = _phone.substring(0,10) + "-" + _phone.substring(10,14);
                }
                scope.phone = _phone;
                return _phone;
            }

            element.bind("keyup", function(){
                ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function(value){
                if(value.length>=14){
                    var _parsePhone = value.replace(/[()-\s]/g,"");
                    return _parsePhone;
                }
    
            });
        }
    };
});

angular.module("ui").directive("uiDate", function($filter){
    return{
        require:"ngModel",
        link: function(scope, element, attrs, ctrl){
            var _formatDate = function(date){
                if(!!ctrl.$viewValue) date = date.replace(/[^0-9]+/g, "");
                if(date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 5){
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                scope.data = date;
                return date;
            }
            element.bind("keyup", function(){
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function(value){
                if(value.length === 10){
                    var dateArray = value.split("/");
                    return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
                }
            });

            ctrl.$formatters.push(function(value){
                return $filter("date")(value,"dd/MM/yyyy");
            });
        }
    };
});