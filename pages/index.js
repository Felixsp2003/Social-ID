export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Social Club ID Eingabe</h1>
      <input type="text" placeholder="Deine Social Club ID" style={{ padding: '10px', width: '300px' }} />
      <br /><br />
      <button style={{ padding: '10px 20px' }}>Absenden</button>
    </div>
  );
}
