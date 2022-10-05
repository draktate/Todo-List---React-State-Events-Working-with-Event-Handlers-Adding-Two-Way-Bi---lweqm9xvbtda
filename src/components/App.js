import React, {useEffect, useState} from "react";
import "./../styles/App.css";
import EditTask from "./EditTask";

function Apps() 
{
	const [content, setContent]= useState();
	const [tasks, setTasks]=useState([]);
	const [task, setTask]=useState();
	const [etask, setEtask]=useState(-1);
	


	const createContent=(newTasks)=>
	{

		//console.log("createContet");
		let newContent= newTasks.map((item, index)=>
		{ 
			return <li key={index} id={"li_"+ index} className="list" value={item} >
				<EditTask task={item}  index={index} tasks={tasks} setTasks={setTasks}/>  
			 </li>       
		});

		return newContent;

	}


	const addTask=()=>{
		if(!task) return;

		let newTasks = tasks;
		newTasks.push(task); 


		setTasks(newTasks);
		setTask("");
		setContent(createContent(newTasks));		

		
	
	};

	useEffect(()=>{ 
		//console.log("tasks are updated")

		let newTasks = tasks;
		//newTasks.push(task); 

		setContent(createContent(newTasks));		

	},[tasks])


	useEffect(()=>{
		
		let newTasks = tasks;
		//newTasks.push(task); 
		
		setContent(createContent(newTasks));				

	},[etask]);


		//Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component.

	return (
	<div id="main">

		<input type="textarea" id="task" value={task} onChange={(event)=>{ setTask(event.target.value);  }}/>
			<button id="btn" onClick={addTask} > Add Task</button>
		<br/>
		<ol id="ol_0">
			{content}
		</ol>


	</div>
	
	);
}


export default Apps;
