import { useState } from 'react';

export default function Home() {
  const [socialId, setSocialId] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    if (!socialId.trim()) {
      setResult('❗ Bitte gib eine gültige Social Club ID ein.');
      return;
    }

    // Beispielprüfung – hier kannst du später echte API-Logik einbauen
    if (socialId.toLowerCase() === 'felixsp2003403') {
      setResult('✅ Benutzer gefunden: FelixSP');
    } else {
      setResult('❌ Kein Benutzer mit dieser ID gefunden.');
    }
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px', color: 'white', backgroundColor: '#111', minHeight: '100vh' }}>
      <h1 style={{ fontWeight: 'bold' }}>Social Club ID Eingabe</h1>
      <input
        type="text"
        placeholder="Deine Social Club ID"
        value={socialId}
        onChange={(e) => setSocialId(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <br /><br />
      <button
        onClick={handleSubmit}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Absenden
      </button>
      <br /><br />
      {result && <div style={{ fontSize: '18px' }}>{result}</div>}
    </div>
  );
}
