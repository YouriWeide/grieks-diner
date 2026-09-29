const NO_TEXTS = [
  'Nee',
  'Weet je het zeker?',
  'Weet je het heel zeker?',
  'Echt heel heel zeker?',
  'Laatste kans… 🥺',
]

const MAX_NO = NO_TEXTS.length

function Question({ noCount, onYes, onNo }) {
  const yesScale = 1 + noCount * 0.4
  const noScale = 1 - noCount * 0.15

  return (
    <main className="screen question-screen">
      <div className="card">
        <div className="emoji-big">🏛️</div>
        <h1 className="question">Wil je met mij uit eten bij de Griek?</h1>

        <div className="buttons">
          <button
            className="btn btn-yes"
            style={{ fontSize: `${yesScale * 1.1}rem` }}
            onClick={onYes}
          >
            Ja
          </button>

          {noCount < MAX_NO && (
            <button
              className="btn btn-no"
              style={{ fontSize: `${noScale * 1.1}rem` }}
              onClick={onNo}
            >
              {NO_TEXTS[noCount]}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}

export default Question
