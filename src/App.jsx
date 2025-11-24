import Card from "./Components/Card"
import { useRef } from "react"





function App() {

  const ref = useRef(null)
  return (
    <div ref ={ ref} className='bg-gray-950 h-screen overflow-hidden p-20 w-full text-white'>
      <div className='w-full h-full relative'>
        <h1 className='text-[10vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-50 font-bold'>DOCS.</h1>
        <div className="card_container">
        <Card reference = {ref}/>
       
       </div>
       
      </div>
    
    </div>
  )
}

export default App