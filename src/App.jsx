import { useState } from "react"
import { useLocalState } from './hooks/useLocalState';

function App() {
  const [emailInput, setEmailInput] = useState('');
  const [, setEmail] = useLocalState('@email');

  function onSave() {
    setEmail(emailInput)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#242526",
        color: "#E6E6E6",
        fontFamily: "monospace",
      }}
    >
      <h1 style={{ fontSize: "24px" }}>Custom Hooks</h1>
      <p style={{ display: "block", marginTop: "10px" }}>
        Deixa teu like e inscreva-se no canal :)
      </p>
      <input
        onChange={event => setEmailInput(event.target.value)}
        value={emailInput}
        style={{
          marginTop: "20px",
          height: "40px",
          border: "2px solid #242526",
          backgroundColor: "#E6E6E6",
          borderRadius: "4px",
          padding: "4px",
        }}
        type="email"
        placeholder="Insira seu e-mail"
      />
      <button
        onClick={onSave}
        style={{
          marginTop: "20px",
          height: "40px",
          border: "2px solid #242526",
          backgroundColor: "#E6E6E6",
          borderRadius: "4px",
          padding: "4px",
          cursor: "pointer",
          widht: "100%"
        }}
      >
        Salvar
      </button>
    </div>
  );
}

export default App;
