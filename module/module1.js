'use strict';

let name = "test01";

let testModule = {

    getName: function (){
        return name;
    },

    setName: function(newName){
        name = newName;
    }
}
 export default testModule;