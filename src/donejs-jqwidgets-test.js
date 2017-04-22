import QUnit from 'steal-qunit';
import plugin from './donejs-jqwidgets';

QUnit.module('donejs-jqwidgets');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the donejs-jqwidgets plugin');
});
