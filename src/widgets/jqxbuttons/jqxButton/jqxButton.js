import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css!';
import '../jqxbuttons.js';

import Component from 'can-component';

import './jqxButton.less';
import view from './jqxButton.stache';

import ControlComp from '../../defaultController.js';

var jqxFunc = function(el, args){
  $(el).jqxButton(args);
}

ControlComp.setNewVal = jqxFunc


export default Component.extend({
  tag: 'jqxButton',
  view: view,
  events: ControlComp,
  init: function(element){
    let args = this.viewModel.serialize();
    jqxFunc(element.firstElementChild, args);
  }
});
