import QUnit from 'steal-qunit';
import { ViewModel } from './jqxButton';

// ViewModel unit tests
QUnit.module('donejs-jqwidgets/widgets/jqxbuttons/jqxButton');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the jqxButton component');
});
