import * as React from 'react'

function Hello({name}: {name: string}) {
  const [label, setLabel] = React.useState(`Bonjour ${name}`)
  return (
    <div>
      <div>
        <div role="status">{label}</div>
      </div>
      <input type="button" value="envoyer" onClick={e => setLabel(`Merci`)} />
    </div>
  )
}
export default Hello
