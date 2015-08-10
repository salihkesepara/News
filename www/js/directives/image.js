angular.module("directives.image", [])

.directive('image', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (attr.image == ''){
              element[0].src = 'img/emty.jpg';
              console.log(element[0].src);
            }
        }
    };
}]);