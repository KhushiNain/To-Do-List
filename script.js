let inputTag=document.getElementById("input");
let $toDoList=document.getElementById("todolist");
let todoListArr=[];


function addToList(){

    let task=inputTag.value;
    todoListArr.push(task);

    showList();

    inputTag.value="";
}

function showList(){

    $toDoList.innerHTML=null;

    todoListArr.forEach((ele,idx)=>{

    let li=document.createElement("li")
    li.style.position="relative";
    let text=document.createElement("span");
    let box=document.createElement("span");
    box.style.marginLeft="150px";
    box.style.position="absolute";
    box.style.right="15px";
    let span1=document.createElement("span");

    // making delete option work
    span1.addEventListener("click",function(){
        deleteTask(idx);
    })

    let span2=document.createElement("span");
    let span3=document.createElement("span");  

    // making edit option work
    span2.addEventListener("click",function(){
        editTask(idx);
    })



    text.innerText=task;
    span1.innerHTML="<span>&times<span/>";
    span2.innerText="|";
    span3.innerText="Edit";
    box.append(span1,span2,span3);
    li.append(text,box)
    $toDoList.append(li);

    })
}


// fuction to delete a list item
function deleteTask(index){
    todoListArr.splice(index,1);
    showList();

}
// function to edit a list item
function editTask(index){
    let newTask=prompt("Edit the to do Iteam: ");
    if(newTask==""){
        alert("Please update the task")
    }
    todoListArr.splice(index,1,newTask);
    showList();
}