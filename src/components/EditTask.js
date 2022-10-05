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

	if(props.etask==props.index)
	{	
		return (<div> 
		<input type="textarea" id="task" value={editTask} onChange={(event)=>{setEditTask(event.target.value);}}/>
		<button id="saveButton" className="saveTask" onClick={saveTask}  disabled= {!editTask} > Save </button>
		 </div>); 
	}
	else 
	{ return (<></>)}

}

export default EditTask;
