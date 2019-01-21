var Singleton = (function(){
  
    var instance = null
    var createInstance = function(){
        var obj = Object.create(null)
        console.log("object created successfully")
        return obj;
    }

    var getInstance = function(){
        if(!instance)
            {
                instance = createInstance()
            }
       return instance
    }

    return {getInstance:getInstance}
    // return { 
    //     getInstance:function(){
    //             if(!instance)
    //                 {
    //                     instance = createInstance()
    //                 }
    //            return instance
    //         }
    // }     
    
})()

var sigleton1 = Singleton.getInstance();
console.log(sigleton1)

var sigleton2 = Singleton.getInstance();
console.log(sigleton2)


