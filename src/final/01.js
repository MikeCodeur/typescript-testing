// Styling
// http://localhost:3000/alone/final/01.js

import * as React from 'react'
import HowToTests from '../components/howToTest'

const fileName = '01.js'

function App() {
  return (
    <div>
      <HowToTests solution={true} fileName={fileName} />
    </div>
  )
}

export default App
