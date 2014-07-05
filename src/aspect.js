/**
 * @module x-aspect
 */

(function(){

  /**
   * Element enabling aspect oriented programming / interceptions.
   *
   * x-aspect is an element for AOP in X-Tag.
   *
   * Examples:
   *
   * @class x-aspect
   * @blurb Aspect oriented programming / interceptions for X-Tags/Brick
   * @author Gianni Furger
   * @categories AOP
   *
   */

  var private_router;
  var aspects;

  xtag.register('x-aspect', {
    prototype: Object.create(HTMLElement.prototype),
    accessors: {
      /**
       * aspects: aspects we're into
       * @type {Array}
       */      
      origin: {
        attribute: {}
      },
      /**
       * advice: aspects we're into
       * @type {Array}
       */      
      advice: {
        attribute: {String: true}
      },      
      /**
       * advice: aspects we're into
       * @type {Array}
       */      
      advices: {
        attribute: {Array: true}
      },      
      /**
       * aspects: aspects we're into
       * @type {Array}
       */      
      object: {
        attribute: {}
      },
      /**
       * aspects: aspects we're into
       * @type {Array}
       */      
      method: {
        attribute: {}
      },
      /**
       * aspects: aspects we're into
       * @type {Array}
       */      
      condition: {
        attribute: {}
      },
      /**
       * aspects: aspects we're into
       * @type {Array}
       */      
      trigger: {
        attribute: {}
      },
      /**
       * aspects: aspects we're into
       * @type {Array}
       */      
      aspects: {
        attribute: {}
      },
      /**
       * auto: automatically update the window location hash
       * @type {Boolean}
       */      
      auto: {
        attribute: { boolean: true }
      }
    },
    lifecycle: {
      inserted: function (){},
      created: function(){
        var $this = this;
        try {
          this.remover = meld[this.advice](window[this.object], this.method, function(){
            window[$this.trigger].apply($this, arguments);
          });
        } catch(ex){
          console.error(ex);
        }
      },
      removed: function(){
        this.remover.remove();
      },
      attributeChanged: function(){
        // fired when attributes are set
      }
    },
    methods: {}
  });
})();
