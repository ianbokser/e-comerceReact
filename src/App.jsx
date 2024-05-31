import React from 'react'

import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl flex items-center font-bold mb-4">Productos</h1>
        <ItemListContainer/>
      </div>
    </>
  )
}

export default App
