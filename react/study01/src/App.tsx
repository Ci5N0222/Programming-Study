import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <div>
        <h4>Hi~</h4>
        <Profile name="철수" />
      </div>
    </>
  )
}

function Profile(props: { name: String }): JSX.Element {
  return (
    <div>{ props.name }</div>
  )
}

export default App
