function Draw(){
  var display = function(){
      return "Display call"
  }
  var hello = function(){
      return "hello call"
  }

  return {
      displaycall:function(){
          console.log(hello())
          return "display call function"
      }
  }

}
var drawobj = new Draw()
console.log(drawobj.displaycall())