// Hello
// http://localhost:3000/alone/exercise/02.ts

import * as React from 'react'
import HowToTests from '../components/howToTest'
const fileName = '02.ts'

function App() {
  return (
    <div>
      <div>groupe de tests de fonctions</div>
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
