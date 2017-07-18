import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css!';

import $ from 'jquery';
import '../jqxbuttons.js';

import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Control from 'can-control';
import each from 'can-util/js/each/each';

import './jqxButton.less';
import view from './jqxButton.stache';

export const ViewModel = DefineMap.extend({

});

export const ControlComp = Control.extend({
  init: function(element, options){
    this.prepareBindings();
  },
  prepareBindings: function(){
    let args = this.viewModel.serialize();
    each(args, function(value, key) {
      this.viewModel.on(key, this.setNewVal);
    });
  },
  setNewVal: function(ev, attr, how, newVal){
    let newArgs = {};
    newArgs[attr] = newVal;
    $(this.element.firstElementChild).jqxButton(newArgs);
  }
});

export default Component.extend({
  tag: 'jqxButton',
  ViewModel,
  view,
  ControlComp,
  init: function(element){
    let args = this.viewModel.serialize();
    $(element.firstElementChild).jqxButton(args);
  }
});
