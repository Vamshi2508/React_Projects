import React,{useState,useEffect} from 'react';
import './ToDoList.css'
 function ToDoList(){
    const [tasks,setTasks] =useState([]);
    const [newTask,setNewTask] = useState("");

    const addNewTask = (e) =>
    {
        setNewTask(e.target.value) ;
    }

     const addTasks = (e) =>
    {
        if(newTask){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
            document.getElementById("task").value="";
        }
    }

    const deleteTask = (index) =>
    {
        setTasks(tasks.filter((_,i)=>
            i != index
        ));
    }
    const moveUpTask = (index) =>
    {
        if(index<=0) return;
        const updateTasks= [...tasks];
        [updateTasks[index-1],updateTasks[index]] =[updateTasks[index],updateTasks[index-1]]
        setTasks(updateTasks);
    }
      const moveDownTask = (index) =>
    {
        if(index>=(tasks.length-1)) return;
        const updateTasks = [...tasks];
        [updateTasks[index],updateTasks[index+1]] =[updateTasks[index+1],updateTasks[index]];
        setTasks(updateTasks);
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input className="input-box" type="text" placeholder='Enter a task' id="task" name="task" onChange={addNewTask}/> <button className="add-button" onClick={addTasks}>Add</button>
            <div className="task-container">
                <ul>
                    {tasks.map((task,index)=>
                         <li key={index} className="list-item"> <p className="text"> {task} </p><button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button> <button className="move-button" onClick={()=>moveUpTask(index)}>👆</button> <button className="move-button" onClick={()=>moveDownTask(index)}>👇</button></li> 
                    )}
                </ul>
            </div>
        </div>
    )

} 

export default ToDoList