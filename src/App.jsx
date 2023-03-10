import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className='p-7 font-semibold text-2xl flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default App
