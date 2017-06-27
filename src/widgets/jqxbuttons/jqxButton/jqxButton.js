


import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css!';

import $ from 'jquery';
import '../jqxbuttons.js';

import Component from 'can-component';
import DefineMap from 'can-define/map/';



import './jqxButton.less';
import view from './jqxButton.stache';





export const ViewModel = DefineMap.extend({

});

export default Component.extend({
  tag: 'jqxButton',
  ViewModel,
  view,
  events: {
    init: function(element, options){
      //let args = this.viewModel.serialize();


    }
  },
  init: function(element){
    let args = this.viewModel.serialize();
    $(element.firstElementChild).jqxButton(args);
  }
});
