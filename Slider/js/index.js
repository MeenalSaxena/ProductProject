
var myapp = angular.module("mymodule", []);


myapp.controller("mycontrol", function ($scope, $http) {
    $http.get("http://localhost/2/Product%20Project/js/Mobiles.json").then(function (responseData) {
        $scope.msg = responseData.data;
      $scope.hello="i am working";
        (function (a) {
            var final = []; var temp = []; var i;

            for (i = 0; i < a.length; i++) {
                if ((i % 3 == 0 && i > 0) || (i == a.length - 1)) {

                    final.push(temp);
                    temp = [];

                }
                temp.push(a[i]);

            }
            $scope.msg = final;
            console.log($scope.msg);
        })($scope.msg);
    });
    $scope.imagestyle = { "width": "33%", "height": "170px" } ;

});
