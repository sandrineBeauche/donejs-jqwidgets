import $ from 'jquery';

import DefineList from 'can-define/list/';
import each from 'can-util/js/each/each';

var ControlComp = {
  init: function(element, options){
    this.prepareBindings();
    this.prepareEvents(element);
  },
  prepareBindings: function(){
    let args = this.viewModel.serialize();
    let self = this;
    each(args, function(value, key) {
      self.viewModel.on(key, function(ev, newVal, oldVal){
        let newArgs = {};
        newArgs[ev.type] = newVal;
        self.setNewVal(self.element.firstElementChild, newArgs);
      });
    });
  },
  prepareEvents: function(element){
      let self = this;

      //search events name to listen in the element
      var evs = self.computeEvents(element.outerHTML);

      //listen to the events from jqwidgets
      $(element).on(evs, function(event){
        self.viewModel.dispatch(event);
      });
    },
    computeEvents: function(elementHtml){
      var desc = elementHtml.slice(1, elementHtml.indexOf(">")).split("on:");
      desc = desc.slice(1, desc.length);
      let evs = new DefineList([]);
      each(desc, function(value){
        var ev = value.slice(0, value.indexOf("="));
        evs.push(ev);
      });
      return evs.join(" ");
    }
};

export default ControlComp;
