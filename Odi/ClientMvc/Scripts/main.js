var mainApp = angular.module("mainApp", []);

//var user = angular.module('user', []);
mainApp.controller('userCtrl', function ($scope, $http) {
    $http.get("Home/GetProfile")
        .then(function (response) {
            $scope.userData = response.data;
        });
});


//var post = angular.module('HomePostList', []);
mainApp.controller('HomePostListCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.CurrentPage = 1;
    $scope.TotalPage = 0;
    $scope.veriler = [];

    function GetEmployeeData(page) {
        $scope.IsLoading = true;
        $http({
            method: 'GET',
            url: 'Home/GetMedia',
            params: { 'page': page }
        }).then(function (response) {
            angular.forEach(response.data, function (value) {
                $scope.veriler.push(value);
                console.log("eklendi.");
            });
            $scope.TotalPage = 2;
            $scope.IsLoading = false;
        }, function () {
            $scope.IsLoading = false;
        })
    }

    GetEmployeeData($scope.CurrentPage);

    $scope.NextPage = function () {
        if ($scope.CurrentPage < $scope.TotalPage) {
            $scope.CurrentPage += 1;
            GetEmployeeData($scope.CurrentPage);
        }
    }
}]);

//directive
mainApp.directive('infinityscroll', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('scroll', function () {
                if ((element[0].scrollTop + element[0].offsetHeight) == element[0].scrollHeight) {
                    //scroll reach to end
                    scope.$apply(attrs.infinityscroll)
                }
            });
        }
    }
});
