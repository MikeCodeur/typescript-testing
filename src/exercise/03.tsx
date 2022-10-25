// Hello
// http://localhost:3000/alone/exercise/02.ts

import * as React from 'react'
import HowToTests from '../components/howToTest'
const fileName = '03.ts'

function App() {
  return (
    <div>
      <div>Setup Teardown</div>
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
