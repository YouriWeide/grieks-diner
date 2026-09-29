const FALLING_EMOJIS = ['🫒', '🍷', '🏛️', '🥙', '💙', '🍋', '🧀']

// Build a fixed list of falling items with random position, speed and delay
const fallingItems = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  emoji: FALLING_EMOJIS[i % FALLING_EMOJIS.length],
  left: Math.random() * 100,
  duration: 4 + Math.random() * 4,
  delay: Math.random() * 5,
  size: 1.5 + Math.random() * 1.5,
}))

const PLATES = [
  { id: 0, left: 15, delay: 0.3 },
  { id: 1, left: 50, delay: 1.1 },
  { id: 2, left: 82, delay: 1.9 },
]

function Celebration() {
  return (
    <main className="screen celebration-screen">
      <div className="falling-layer" aria-hidden="true">
        {fallingItems.map((item) => (
          <span
            key={item.id}
            className="falling"
            style={{
              left: `${item.left}%`,
              fontSize: `${item.size}rem`,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      <div className="plates" aria-hidden="true">
        {PLATES.map((plate) => (
          <div
            key={plate.id}
            className="plate"
            style={{ left: `${plate.left}%`, animationDelay: `${plate.delay}s` }}
          >
            <span className="plate-whole" style={{ animationDelay: `${plate.delay}s` }}>🍽️</span>
            <span className="plate-smash" style={{ animationDelay: `${plate.delay}s` }}>💥</span>
          </div>
        ))}
      </div>

      <div className="card celebration-card">
        <div className="meander" />
        <h1 className="opa">Opa! 🎉</h1>
        <p className="celebration-text">Het is een date!</p>
        <p className="celebration-text">Zie je bij de Griek 💙</p>
        <div className="flag">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className={i % 2 === 0 ? 'stripe blue' : 'stripe white'} />
          ))}
          <div className="canton">
            <div className="cross-h" />
            <div className="cross-v" />
          </div>
        </div>
        <div className="meander" />
      </div>
    </main>
  )
}

export default Celebration
