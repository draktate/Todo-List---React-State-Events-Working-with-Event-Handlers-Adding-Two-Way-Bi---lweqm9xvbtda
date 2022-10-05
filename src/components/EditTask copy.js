import React, {useState,useEffect} from "react";
import "./../styles/App.css";


function EditTask(props) 
{

	const [editTask, setEditTask]=useState(props.task);
	const saveTask=()=>{ 
		console.log("saveTask:")
		let newTasks = [...props.tasks];
		newTasks[props.index]=editTask;
		props.setTasks(newTasks);
		props.setEtask(-1);

		console.log("new Tasks:", newTasks);


	};
	
	useEffect(()=>{
	

	},[props]);

//<EditTask task={item} etask={etask} setEtask={setEtask} index={index} tasks={tasks} setTasks={setTasks}/>


		return (<div> 
		<input type="textarea" id="task" value={props.task} disabled="true" onChange={(event)=>{setEditTask(event.target.value);}}/>
		<button id={"Add_"+index} value={index} className="editTask" onClick={editTask}> Edit </button> <button id={"Del_"+index}  value={index} onClick={deleteTask}> Delete </button>
		<button id="saveButton" className="saveTask" onClick={saveTask}  disabled= {!editTask} > Save </button>
		 </div>); 

}

export default EditTask;
