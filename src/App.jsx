
import MainContent from './MainContent'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <div className="bg-[#100e1d] flex flex-col lg:flex-row">
      <Sidebar />
      <MainContent />
      </div>
  )
}

export default App
