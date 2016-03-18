// bootstrapnya pake yang ini ya:
// ---- https://angular-ui.github.io/bootstrap/
// declare a module
var myAppModule = angular.module('myModule', ['ui.bootstrap']);

// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});