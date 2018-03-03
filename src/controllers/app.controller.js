app.controller('AppCtrl', ['$scope' ,function ($scope) {
    $scope.currentNavItem = 'page1';

    $scope.goto = function(page) {
        $scope.status = "Goto " + page;
    };

    $scope.x_menu = {open : false};
}]);

app.controller('SideController', ['$scope', '$state' ,function ($scope, $state) {
    $scope.ctrl = {
        fruitNames : ['Apple', 'Banana', 'Orange']
    };

    $scope.search = function () {
        $state.go('search');
    }
}]);