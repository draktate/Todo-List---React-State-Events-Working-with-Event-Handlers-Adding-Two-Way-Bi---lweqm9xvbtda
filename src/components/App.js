import React, {useEffect, useState} from "react";
import "./../styles/App.css";
import EditTask from "./EditTask";

function Apps() 
{
	const [content, setContent]= useState();
	const [tasks, setTasks]=useState([]);
	const [task, setTask]=useState();
	const [etask, setEtask]=useState(-1);
	
	const editTask=(event)=>
	{
		setEtask(event.target.value);
		console.log("Edit task", event.target.value);
		
	}



	const deleteTask=(event)=>{
		let newTasks = tasks;
		newTasks.splice(event.target.value,1);
		let newContent= newTasks.map((item, index)=>
		{ 
			return <li key={index} id={"li_"+ index} className="list" value={item} > {item} <br/>
			<button id={"Add_"+index} value={index} className="editTask" onClick={editTask}> Edit </button> <button id={"Del_"+index}  value={index} onClick={deleteTask}> Delete </button> </li>       
		}
		);

		setTasks(newTasks);
		//console.log("newTasks:", newTasks)
		setContent(newContent);



	}

	const addTask=()=>{
		if(!task) return;

		let newTasks = tasks;
		newTasks.push(task); 
		
		let newContent= newTasks.map((item, index)=>
		{ 
			return <li key={index} id={"li_"+ index} className="list" value={item} > {item} <br/>
			<button id={"Add_"+index} className="editTask" value={index} onClick={editTask}> Edit </button> <button id={"Del_"+index}  value={index} onClick={deleteTask}> Delete </button> </li>       
		}
		);

		//let testContent= newTasks.map((item, index)=> { console.log(index)});
		
		setTasks(newTasks);
		setTask("");
		//console.log("newTasks:", newTasks)
		setContent(newContent);
	
	};

	useEffect(()=>{ 
		console.log("tasks are updated")

		let newTasks = tasks;
		//newTasks.push(task); 
		
		let newContent= newTasks.map((item, index)=>
		{ 
			return <li key={index} id={"li_"+ index} className="list" value={item} > {item} <br/> 
			<button id={"Add_"+index} value={index} className="editTask" onClick={editTask}> Edit </button>	 <button id={"Del_"+index} value={index} onClick={deleteTask}> Delete </button>  <EditTask task={item} etask={etask} setEtask={setEtask} index={index} tasks={tasks} setTasks={setTasks}/></li>       
		}
		);

		setContent(newContent);

	},[tasks])


	useEffect(()=>{},[etask]);
	useEffect(()=>{
		
		let newTasks = tasks;
		//newTasks.push(task); 
		
		let newContent= newTasks.map((item, index)=>
		{ 
			return <li key={index} id={"li_"+ index} className="list" value={item} > {item} <br/>
			<button id={"Add_"+index} value={index}  className="editTask" onClick={editTask}> Edit </button> <button id={"Del_"+index} value={index} onClick={deleteTask}> Delete </button>  <EditTask task={item} etask={etask} index={index} tasks={tasks} setEtask={setEtask} setTasks={setTasks}/></li>       
		}
		);

		setContent(newContent)
		

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
