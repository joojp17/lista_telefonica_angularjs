angular.module("listaTelefonica").filter("phone", function (){
    return function (input){
        var _phoneList = "(" + input.substring(0,2) + ") " + input.substring(2);
        if(input.length === 10){
            _phoneList = _phoneList.substring(0,9) + "-" + _phoneList.substring(9);
        }
        else{
            _phoneList = _phoneList.replace("-","");
            _phoneList = _phoneList.substring(0,10) + "-" + _phoneList.substring(10,14);
        };
            return _phoneList;
        }
});