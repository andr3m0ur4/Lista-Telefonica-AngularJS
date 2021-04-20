app.directive('uiAlert', () => {
    return {
        templateUrl: 'view/alert.html',
        restrict: 'AE',
        scope: {
            title: '@',
            message: '='
        },
        transclude: true
    }
})