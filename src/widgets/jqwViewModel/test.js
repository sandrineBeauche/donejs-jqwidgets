import "steal-mocha";
import chai from 'chai/chai.js';

import jqwViewModel from './jqwViewModel.js';

var expect = chai.expect;

describe("jqwViewModel", function(){

  describe("build", function(){
    it("recognizes a property with the 'jqx' prefix", function(){
      var ViewModel = jqwViewModel.extend({},{
        jqxFunc: function(el, args){
          expect(args).to.deep.equal({"Att1": "value1"});
        }
      });

      var vm = new ViewModel({"jqxAtt1": "value1"});
      vm.build(undefined);
    });

    it("recognizes all properties with the 'jqx' prefix", function(){
      var ViewModel = jqwViewModel.extend({},{
        jqxFunc: function(el, args){
          expect(args).to.deep.equal({"Att1": "value1", "Att2": "value2"});
        }
      });

      var vm = new ViewModel({"jqxAtt1": "value1", "jqxAtt2": "value2"});
      vm.build(undefined);
    });

    it("recognizes only properties with the 'jqx' prefix", function(){
      var ViewModel = jqwViewModel.extend({},{
        jqxFunc: function(el, args){
          expect(args).to.deep.equal({});
        }
      });

      var vm = new ViewModel({"Att1": "value1"});
      vm.build(undefined);
    });
  })
});
