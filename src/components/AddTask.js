 import { useState , useRef} from "react";
import "./AddTask.css";

export const AddTask = ({tasks, setTasks} ) => {
   
    const [taskValue , setTaskValue] = useState("");
  
    const[progress , setProgress]= useState(false);
   const taskRef = useRef("");
    const handleChange =(event) =>{
         setTaskValue(event.target.value);
     }
    const handleReset =() =>{
            setTaskValue("");
            setProgress(false);

        }
     const handleSubmit =(event)=>{
        event.preventDefault();
     
     const task={
        id: Math.floor(Math.random()* 10000),
        name: taskValue,
        completed: progress
       }
       setTasks([...tasks , task]);
       handleReset();

     }
  return (
   <section className="addtask">
    <form onSubmit={handleSubmit}>
       <input onChange={handleChange} type="text" name="task" id="task " placeholder="Task Name" autoComplete="off" value={taskValue} ref={taskRef}/>  
     <select onChange={(event)=> setProgress(event.target.value)} value={progress}>

     <option value={false}>Pending</option>
     <option value={true}>completed</option>

        </select> 
        <button type="submit ">Add Task</button>
       <span onClick={handleReset} className="reset">Reset</span>
    </form>
    <p>{taskValue }</p>
   </section> 
   
  )
}