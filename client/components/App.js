import React from 'react'

// import Containers_Counter from '../containers/Counter'
import Components_Todos from './Todos'

const App = ({ store }) => (
  <div>
    {/* <Containers_Counter store={store} /> */}
    <Components_Todos store={store} />
  </div>
)

export default App
