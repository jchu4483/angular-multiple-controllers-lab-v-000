function StaffController() {
  var vm = this;

  vm.name = 'Mark'
  vm.email = 'mark@gmail.com'
  vm.phone = '666666666'
};

angular.module('app').controller("StaffController", StaffController);
