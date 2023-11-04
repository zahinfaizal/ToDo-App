import { useState } from "react"

const App =() => {

const [tasks,setTasks] =useState([]);
const [task,setTask] = useState("")


const addTasks = () => {
  if(task!== ""){
    setTasks([...tasks,task])
    setTask("");
    console.log(tasks);
  }
}

const deleteTask = (index) => {
  const updatedList = [...tasks];

    updatedList.splice(index,1)
setTasks(updatedList)
}
  return(
   
   <div className="flex flex-col items-center text-green-900">
   
      <h1 className="text-4xl m-16 font-bold ">Todo App</h1>
    
    <div className="p-6">
      <input className="bg-slate-100 rounded-md p-4 m-4"
       type="text"
       value={task}
       onChange={(e)=>{
        setTask(e.target.value);
       }}
      placeholder="Create a new Todo" 
      />
      <button onClick={addTasks} className="bg-green-400 text-white p-3 m-3 rounded-md font-bold hover:bg-blue-600">Add Task</button>
    </div>
    <div>
       { tasks?.length > 0 ? (
        <ul>
          {
            tasks.map((task,index)=>(
              <div className="flex bg-slate-200 m-4 py-3 pl-12 pr-4 rounded-md" key={index}>
                <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
                <button onClick={()=>{deleteTask(index)}} className="bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600">Delete</button>
              </div>
            ))
          }
        </ul>
       ):(
        <div>
           <p className="text-center text-red-700 font-bold"> No Data Found</p>
          <img width={"300px"} src="https://assets-v2.lottiefiles.com/a/8f195bf4-1179-11ee-88da-277f023b0f0c/z4c7jIndmE.gif" alt="" />
         
        </div>
       )}
    </div>
   </div>
  )
}
export default App