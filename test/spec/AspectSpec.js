bar = 123;

describe("<x-aspect>", function() {

  describe("delegates advices to cujojs/meld, allowing you to", function(){  

    // flag initialization
    var initialized = false;

    // silly, but for now ok.
    beforeEach(function(done) {
      
      // yes.
      if(initialized) { 

        // passthrough
        done(); 

      // init.
      } else {
      
        // flag initialization
        initialized = true;
        
        // prepare HTML snippet to inject
        var $element = $('<x-aspect object="window" method="mike" advice="before" trigger="shalalala3"/>');
        
        // async processing we need (next tick)
        setTimeout(function(){ done(); }, 10);
        
        // !important
        setFixtures($element);        

        // attach spy to delegate method we want to call $element.attr('trigger')
        spyOn(window, "shalalala3").and.returnValue(745);
      }
    });

    it("tracks that the spy was called", function(done) {
      fetchedBar = mike('hhiii');
      object.method1();
      expect(shalalala3).toHaveBeenCalled();
      done();
    });

    it("should not effect other functions", function(done) {
      expect(bar).toEqual(123);
      done();
    });

    it("when called returns the requested value", function(done) {
      expect(fetchedBar).toEqual(745);
      done();
    });

  });  
});
