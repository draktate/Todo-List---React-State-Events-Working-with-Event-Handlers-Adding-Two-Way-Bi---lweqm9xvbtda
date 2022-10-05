import React, {useState,useEffect} from "react";
import "./../styles/App.css";


function EditTask(props) 
{
	const [disabled, setDisable]=useState(true);
	const [showEdit, setShowEdit]=useState(true);
	const [saveDisabled, setSaveDisabled]=useState(true);

	const createContent=(newTasks)=>
	{

		//let newContent= newTasks.map((item, index)=>
		//{ 
		//	return <li key={index} id={"li_"+ index} className="list" value={item} >
		//<EditTask task={item} etask={etask} setEtask={setEtask} index={index} tasks={tasks} setTasks={setTasks}/>  
		//</li>       
		//	});

		return newContent;

	}

	//<EditTask task={item} index={index} tasks={tasks} setTasks={setTasks}/>


	const editTask=(event)=>
	{
		//setEtask(event.target.value);
		setDisable(false);
		//console.log("Edit task", event.target.value);
		setShowEdit(false);
		setSaveDisabled(false);

		
	}

	const deleteTask=(event)=>{
		let newTasks = [...props.tasks];

		//console.log("detete at position:", props.index);
		//console.log("Before delete:", newTasks);

		newTasks.splice(props.index,1);
		//console.log("after delete:", newTasks);

		props.setTasks(newTasks);
		//setContent(createContent(newTasks));
	}


	//const [editTask, setEditTask]=useState(props.task);
	const [task, setTask]=useState(props.task);
	


	const saveTask=()=>{ 

		setDisable(true);
		setShowEdit(true);
		setSaveDisabled(true);
		//console.log("saveTask:")
		let newTasks = [...props.tasks];
		newTasks[props.index]=editTask;
		props.setTasks(newTasks);



	};
	
	useEffect(()=>{
		setTask(props.task)	;

	},[props]);



		return (<div> 
		<input type="textarea" id="task" value={task} disabled={disabled} onChange={(event)=>{setTask(event.target.value);}}/>
		<button id={"Edit_"+props.index} value={props.index} className="editTask" disabled={!showEdit} onClick={editTask}> Edit </button> 
		<button id={"Del_"+props.index}  value={props.index} onClick={deleteTask}> Delete </button>
		<button id="saveButton" className="saveTask" onClick={saveTask}  disabled= {saveDisabled || !task} > Save </button>
		 </div>); 

}

export default EditTask;
