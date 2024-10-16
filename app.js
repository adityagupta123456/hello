let todo=[];
let req=prompt("enter your task");
while(true){
    if(req=="quit"){
        console.log ("quitting game");
        break;
    }
    else if(req=="list"){
        console.log("----------");
        for(item of todo){
            console.log(item);
        }
        console.log("--------")
    }
   else if(req=="add"){
    let task=prompt("enter your task for add");
    todo.push(task);
    console.log("task added successfully");
     

   }
    req=prompt("enter your task");   
   }