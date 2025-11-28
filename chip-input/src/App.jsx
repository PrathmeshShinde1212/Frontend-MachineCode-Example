
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [chips, setchips] = useState([]);

  const handleinput = (e) => {
    if (e.key === "Enter") {
      if (input.trim() === "") return;

      setchips(prev => [...prev, input]);
      setInput("");
    }
  }

  const deletechip = (index) => {
    const newchips = chips.filter((chip, i) => i !== index);
    setchips(newchips);
  }

  return (
    <>
      <div>
        <input
          type='text'
          style={{ padding: "8px", width: "200px" }}
          placeholder='please enter a chip'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleinput}
        />
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "20px"
      }}>
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              background: "gray",
              padding: "6px 12px",
              color: "white",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            {chip}
            <button
              onClick={() => deletechip(index)}
              style={{
                background: "transparent",
                border: "none",
                color: "red",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App

