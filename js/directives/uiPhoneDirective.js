angular.module("listaTelefonica").directive("uiPhone", function(){
    return{
        require:"ngModel",
        link: function(scope, element, attrs, ctrl){
            var _formatPhone = function(phone){
                phone = phone.replace(/[^0-9]+/g, "");
                if(phone.length > 2){
                    phone = "(" + phone.substring(0,2) + ") " + phone.substring(2);
                }
                if(phone.length > 9){
                    phone = phone.substring(0,9) + "-" + phone.substring(9);
                }
                if(phone.length > 14){
                    phone = phone.replace("-","");
                    phone = phone.substring(0,10) + "-" + phone.substring(10,14);
                }
                return phone;
            }
            element.bind("keyup", function(){
                if(!ctrl.$viewValue) return;
                ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
                ctrl.$render();
                console.log(!!scope.contatoForm.telefone.$error.maxlength);
                console.log(!!scope.contatoForm.telefone.$dirty);
            });

            ctrl.$parsers.push(function(value){
                if(value.length >= 14){
                    var parsePhone = value.replace(/[()-\s]/g,"");
                    return parsePhone;
                }
            });
        },
    };
});