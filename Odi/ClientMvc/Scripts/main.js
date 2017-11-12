var app = angular.module('myApp', []);
app.controller('InfinityScrollController', ['$scope', '$http', function ($scope, $http) {
    $scope.CurrentPage = 1;
    $scope.TotalPage = 0;
    $scope.EmployeeList = [];

    function GetEmployeeData(page) {
        $scope.IsLoading = true;
        $http({
            method: 'GET',
            url: 'Home/GetMedia',
            params: { 'page': page }
        }).then(function (response) {
            angular.forEach(response.data.List, function (value) {
                $scope.EmployeeList.push(value);
                console.log(value);
            });
            $scope.TotalPage = response.data.length;
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
app.directive('infinityscroll', function () {
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