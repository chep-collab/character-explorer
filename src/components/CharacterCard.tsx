'use client';

import { Character } from '../hooks/useCharacters';

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="font-bold text-lg">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}
