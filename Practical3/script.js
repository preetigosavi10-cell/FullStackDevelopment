 function addTask()
 {
    let task=document.getElementById("task").value;

    if(task=="")
 {
    alert("enter task");
    return;
 }

 let li=document.createElement("li");
 li.innerHTML=task+'<button onclick="deleteTask(this)">Delete</button>';

 document.getElementById("tasklist").append(li);
 document.getElementById("task").value="";

    }

    function deleteTask(button)
    {
        button.parentElement.remove();
    }