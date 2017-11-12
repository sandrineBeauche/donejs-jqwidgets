import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css!';
import '../jqxbuttons.js';

import Component from 'can-component';

import './jqxButton.less';
import view from './jqxButton.stache';

import jqwControl from '../../jqwController.js';
import jqwViewModel from '../../jqwViewModel.js';

export const ViewModel = jqwViewModel.extend({},{
  jqxFunc: function(el, args){
    return $(el).jqxButton(args);
  }
});


export default Component.extend({
  tag: 'jqxButton',
  ViewModel: ViewModel,
  view: view,
  events: jqwControl,
  init: function(element){
    this.viewModel.build(element.firstElementChild);
  }
});
