
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import IssueManagement from './components/issueManagement/IssueManagement'
import Hero from './components/Hero/Hero'

// API Fetch
const fetchIssues = async () => {
  const result = await fetch("/tickets.json")
  return result.json()
}

function App() {
  const fetchPromise = fetchIssues();

  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);


  const handleAddTask = (issue) => {
    
    if (!tasks.find(t => t.id === issue.id)) {
      setTasks([...tasks, issue]);
      alert(`Task "${issue.title}" added to Task Status`);
    }
  };

  const handleComplete = (id) => {
  const completedTask = tasks.find(task => task.id === id);
  if (completedTask) {
    setTasks(tasks.filter(task => task.id !== id));
    setResolvedTasks([...resolvedTasks, completedTask]);
    alert(`Task "${completedTask.title}" marked as complete!`);
  }
};

<h1 className="text-3xl font-bold mb-4">
  Task Status (In Progress: {tasks.length}, Resolved: {resolvedTasks.length})
</h1>

  return (
    <>
      <Navbar></Navbar>
      <Hero inProgressCount={tasks.length} resolvedCount={resolvedTasks.length} />
      
          
      <div className='grid grid-cols-12 max-w-11/12 mx-auto gap-6 my-16'>
        <div className='col-span-8'>
           <h2 className='text-3xl font-bold'>Customer Tickets</h2>
           <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <IssueManagement fetchPromise={fetchPromise} onAddTask={handleAddTask} resolvedTasks={resolvedTasks}/>
      </Suspense>
      
        </div>

        <div className="col-span-4">
          <h1 className="text-3xl font-bold mb-4">Task Status</h1>

          {tasks.length === 0 ? (
            <p className="text-gray-500">Select a ticket to add to Task Status</p>
          ) : (
            <div className="space-y-4">
              {tasks.map(task => (
                <div key={task.id} className="p-4 rounded-md shadow flex flex-col">
                  <span className="font-semibold text-sm md:text-xl">{task.title}</span>
                  <button
                    onClick={() => handleComplete(task.id)}
                    className="px-3 py-3 my-2 text-sm font-semibold bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          )}


          <div className="mt-6">
  <h2 className="text-2xl font-bold mb-2">Resolved Tasks</h2>
  {resolvedTasks.length === 0 ? (
    <p className="text-gray-500">No resolved tasks yet.</p>
  ) : (
    <ul className="space-y-2">
      {resolvedTasks.map(task => (
        <li key={task.id} className="p-3 rounded bg-[#E0E7FF]">
          {task.title}
        </li>
      ))}
    </ul>
  )}
</div>
        </div>

        

      </div>

      


      <Footer></Footer>
    </>
  )
}

export default App
