import { useState } from 'react';

export default function Home() {
  const [socialId, setSocialId] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    if (!socialId.trim()) {
      setResult('Bitte gib eine gültige Social Club ID ein.');
      return;
    }

    // Simulierte Abfrage – später durch echte API ersetzen
    if (socialId.toLowerCase() === 'test123') {
      setResult('✅ Benutzer gefunden: Max Mustermann');
    } else {
      setResult('❌ Kein Benutzer mit dieser ID gefunden.');
    }
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Social Club ID Eingabe</h1>
      <input
        type="text"
        placeholder="Deine Social Club ID"
        value={socialId}
        onChange={(e) => setSocialId(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <br /><br />
      <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>
        Absenden
      </button>
      <br /><br />
      {result && <div style={{ fontSize: '18px' }}>{result}</div>}
    </div>
  );
}
