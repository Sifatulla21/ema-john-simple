import { useState } from 'react'
import './App.css'
import Header from '../src/components/header/Header'
import Product from '../src/components/product area/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Product></Product>
    </div>
  )
}

export default App
