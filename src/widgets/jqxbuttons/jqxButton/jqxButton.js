import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './jqxButton.less';
import view from './jqxButton.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the jqxButton component'
  }
});

export default Component.extend({
  tag: 'jqxButton',
  ViewModel,
  view
});
