function lookUpProfile(name, prop){
    for(let i=0;i<contacts.length;i++){
        let obj = contacts[i]; //for object
        if(obj.firstName==name){
            if(obj[prop]!=undefined){
                return obj[prop];
            }
            else{
                return 'No such property';
            }
        }
    }
    return 'No such contact'; //if we write in the loop else statement will be executed many times
    }

    // function lookUpProfile(name, prop){
    //     for(let k in contacts){
    //         if(name==contacts[k].firstName){
    //             if(contacts[k][prop]!=undefined){
    //                 return contacts[k][prop];
    //             }
    //             else{
    //                 return 'No such property';
    //             }
    //         }
    //     }
    //     return 'No such contact';
    //     }