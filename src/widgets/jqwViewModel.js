import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';

var jqwViewModel = DefineMap.extend({}, {
  element: "any",
  build: function(el){
    this.element = el;

    var jqxProps = {}
    this.forEach(function(value, propName){
      if(propName.startsWith("jqx")){
        jqxProps[propName.slice(3)] = value;
      }
    });

    this.jqxFunc(this.element, jqxProps);
  },
  jqxGet: function(propName){
    return this.jqxFunc(this.element, propName);
  },
  jqxSet: function(propName, newValue){
    var args = {};
    args[propName] = newValue;
    this.jqxFunc(this.element, args);
  },
  jqxCall: function(methodName){
    this.jqxFunc(this.element, methodName);
  },
  jqxFunc: function(el, args){}
});

export default jqwViewModel;
