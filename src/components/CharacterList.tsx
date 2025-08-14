'use client';

import { Character } from '../hooks/useCharacters';
import CharacterCard from './CharacterCard';

interface Props {
  characters: Character[];
}

export default function CharacterList({ characters }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
