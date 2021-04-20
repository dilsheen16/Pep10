function updateRecords(object, id, prop, value) {
    if(prop!="tracks"&&value!=("")){
      object[id][prop]=value;
    }
    //create
    else if(prop=="tracks"&&object[id][prop]==undefined){
      let arr=[] ;
      arr.push(value);
      object[id][prop]=arr;
    }
    //update
    else if(prop=="tracks" && value !=""){
      object[id][prop].push(value); //this will use array created in previous conditino
    }
    //delete
    else if(value==""){
      delete object[id][prop];
    }
    return object;
  }