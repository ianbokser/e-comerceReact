import React from 'react'

import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBarComponent></NavBarComponent>
      <ItemListContainer greeting={"hola mundo"}></ItemListContainer>
    </>
  )
}

export default App
