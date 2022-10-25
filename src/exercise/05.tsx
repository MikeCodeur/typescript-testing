// Hello
// http://localhost:3000/alone/exercise/02.ts

import * as React from 'react'
import HowToTests from '../components/howToTest'
const fileName = '05.ts'

function App() {
  return (
    <div>
      <div>React Testing Library</div>
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
