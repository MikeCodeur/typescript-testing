// http://localhost:3000/counter

import * as React from 'react'

function HowToTests({solution = false, fileName = '01.js'}) {
  const label = solution
    ? `La solution ne se trouve pas ici :)`
    : `Pour lancer le test du composant de l'exercice `
  const testsDirectory = solution ? `final` : `exercise`
  return (
    <div>
      <div>{label}</div>
      <div>
        Edite le fichier :{' '}
        <pre>
          <code>
            src/__tests__/{testsDirectory}/{fileName}
          </code>
        </pre>
      </div>
      <div>
        et excute la commande :{' '}
        <pre>
          <code>
            npm test /__tests__/{testsDirectory}/{fileName}{' '}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default HowToTests
