// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import Hello from '../components/hello'
import HowToTests from '../components/howToTest'
const fileName = '01.ts'

function App() {
  return (
    <div>
      <Hello name="John" />
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
