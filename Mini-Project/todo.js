/*
To use this todo list

new: creates new list
list: prints all lists in the console
edit: updates the status of selected list
delete: deletes selected list

*/




let choice = prompt("What would you like to do?")
let title,descr,date,time,stat
const todoList=[]; //array used to store the todos in form of objects
const active=[] //these arrays are used to store the indexes holding active, done and expired lists
const  done=[]
const expired=[]
let activeCount=0; //these counter variables are used to see how many active,done,and expired lists there are
let doneCount=0;
let expiredCount=0;




while(choice!=="exit"){
if(choice==="New"||choice==="new"){
    input(); //function which uses prompts to get data from user
    todoList.push(test(title,descr,date,time,stat));


}
else if(choice==="List"||choice==="list"){
    for(let i=0; i<todoList.length; i++){
        if(todoList[i].statusofTodo==="done"){
            done.push(i);
            doneCount++;
        }else if(todoList[i].statusofTodo==="active"){
           
            active.push(i);
            activeCount++;
        }else{
            expired.push(i);
            expiredCount++;
           
        }
    }
    console.log(`Active Lists: You have a total of ${activeCount} active list(s)`)
    print(active);
    console.log("\n\n")
    console.log(`Done Lists: You have a total of ${doneCount} done list(s)`);
    print(done);
    console.log("\n\n")
    console.log(`Expired Lists: You have a total of ${expiredCount} expired list(s)`)
    print(expired);
    console.log("\n\n")
    
    doneCount=activeCount=expiredCount=0;//reset counters incase user wants to list them again
    clear(); //reset active,done and expired array holders incase user wants to list todos again
    
}
else if(choice==="edit"||choice==="Edit"){
    let edit = prompt("Which list would you like to edit?")
    let status = prompt("What would you like to change this list's status to?")
    editStatus(edit,status);
    
}
else if(choice==="delete"||choice==="Delete"){
   let deleteList = prompt("Which list would you like to delete?")
   deletefromArray(deleteList); 
}
choice = prompt("What would you like to do?")
}


// todoList.forEach(function(list){
//     console.log(`Title of List: ${list.title}\nDescription: ${list.description}\nDate: ${list.date}\nTime: ${list.time}\nStatus:${list.statusofTodo}\n\n`)
// })





//new list function
function input(){
    title=prompt("Enter the title of your activity");
    descr=prompt("Enter the description of your activity");
    date=prompt("Enter the date of your activity");
    time=prompt("Enter the time of your activity");
}

//Applying data into object
function test(title,descr,date,time){
    const todoCreate ={
        title:title,
        description:descr,
        date:date,
        time:time,
        statusofTodo:'active'
    }
    return todoCreate
}

//List function
function print(index){
for(let i=0; i<index.length; i++){
    console.log(
    `List No: ${index[i]+1}
    Title of List: ${todoList[index[i]].title}
    Description: ${todoList[index[i]].description}
    Date: ${todoList[index[i]].date}
    Time: ${todoList[index[i]].time}
    Status:${todoList[index[i]].statusofTodo}\n\n`)

}


}
//Edit Function
function editStatus(index,status){
    todoList[index-1].statusofTodo = status
}
//Clear Function
function clear(){
    while(active.length>0){
        active.pop()
    }
    while(done.length>0){
        done.pop()
    }
    while(expired.length>0){
        expired.pop()
    }
}
//delete function
function deletefromArray(index){
    todoList.splice(index-1,1);
}