import { useState } from 'react';
import { db } from '../db/db';

export function FriendAdder() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  async function save() {
    await db.friends.add({ name, age });
    setName('');
  }

  return (
    <div>
      Name:{' '}
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <br />
      Age:{' '}
      <input
        type="number"
        value={age}
        onChange={(ev) => setAge(Number(ev.target.value))}
      />
      <br />
      <button onClick={save}>Save</button>
    </div>
  );
}
