
import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import IssueManagement from './components/issueManagement/IssueManagement'
import Hero from './components/Hero/Hero'

              {/* API Fetch */}
        const fetchIssues = async() => {
         const result = await fetch("/tickets.json")
         return result.json()
        }

function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      
          
      <div className='grid grid-cols-12 max-w-11/12 mx-auto gap-6 my-16'>
        <div className='col-span-8'>
           <h2 className='text-3xl font-bold'>Customer Tickets</h2>
           <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>
      
        </div>

        <div className='col-span-4'>
           <h1 className='text-3xl font-bold'>Report Section</h1>
        </div>
      </div>
      

      <Footer></Footer>
    </>
  )
}

export default App
