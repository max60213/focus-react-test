import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="shell">
      <div className="topline"><span className="mark">F.</span><span>FOCUS / PLAYGROUND</span><span className="live"><i /> LIVE</span></div>
      <section className="hero">
        <p className="eyebrow">REACT DEVELOPMENT ENVIRONMENT</p>
        <h1>Make room<br />for <em>what matters.</em></h1>
        <p className="intro">A little space to think, experiment, and build.<br />Your React playground is ready.</p>
        <div className="counter"><button aria-label="減少計數" onClick={() => setCount(count - 1)}>−</button><span>{String(count).padStart(2, '0')}</span><button aria-label="增加計數" onClick={() => setCount(count + 1)}>+</button><small>INTERACTIONS</small></div>
      </section>
      <footer><span>BUILT WITH REACT</span><span>RUNNING ON NODE.JS <b>↗</b></span></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
