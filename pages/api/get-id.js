import axios from 'axios';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Kein Benutzername angegeben' });
  }

  try {
    const response = await axios.get(`https://socialclub.rockstargames.com/member/${username}`);
    const html = response.data;

    const match = html.match(/"RockstarId":(\d+)/);

    if (match && match[1]) {
      return res.status(200).json({ id: match[1] });
    } else {
      return res.status(404).json({ error: 'ID nicht gefunden' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Fehler beim Abrufen der Seite' });
  }
}
