import { useState } from 'react'
import Question from './components/Question.jsx'
import Celebration from './components/Celebration.jsx'

function App() {
  const [accepted, setAccepted] = useState(false)
  const [noCount, setNoCount] = useState(0)

  if (accepted) {
    return <Celebration />
  }

  return (
    <Question
      noCount={noCount}
      onYes={() => setAccepted(true)}
      onNo={() => setNoCount(noCount + 1)}
    />
  )
}

export default App
