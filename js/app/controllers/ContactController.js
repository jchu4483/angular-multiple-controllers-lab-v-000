function ContactController() {
  var vm = this;

  vm.name = 'Jason'
  vm.email = 'jchu4483@gmai.com'
  vm.phone = '3474001861'

  this.changeName = function () {
    vm.name = 'What now'
  }
}

angular.module('app').controller('ContactController', ContactController);
