import { useState } from 'react'

import viteLogo from '/vite.svg'
import Navbar from './Componants/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Admin/>
      </div>
    </>
  )
}

export default App
