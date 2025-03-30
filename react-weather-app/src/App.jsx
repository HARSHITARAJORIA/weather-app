import './App.css'
import Search from './components/search/Search'


function App() {
  

  return (
    <>
      <div className='left-25 w-[80%] h-20 mt-2 bg-white/20 border border-white/20 rounded-md flex justify-center items-center gap-6 mx-auto p-4 text-zinc-900'>
        <Search />
      </div>
    </>
  )
}

export default App
