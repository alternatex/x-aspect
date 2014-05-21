var object, bar, fetchedBar;

var object = {
  method: function() {
    return bar;
  },
  method1: function(){
    this.method();
  }
};

var mike = function mike(){
  console.log("window.mike was called.", meld);
  console.log(xtag.tags, xtag.tags['x-aspect']);
  return 745;
};

var shalalala = function shalalala(){
  console.log("SHALALALALALA");
  return 2;
};

var shalalala3 = function shalalala3(){
  console.log("SHALALALALALA3");
  return 3;
};