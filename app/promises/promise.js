var promise = function(){
  var a = 1;
  var b = 0;

  return a/b;
}.then(
  function(){
    console.log("ok")
  },
  function(){
    console.log("error")
  }
);

promise();
