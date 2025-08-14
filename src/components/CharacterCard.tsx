'use client';

import Link from 'next/link';
import { Character } from '../hooks/useCharacters';
import FavoritesToggle from './FavoritesToggle';

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <div className="card p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <Link href={`/characters/${character.id}`} className="w-full">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-auto rounded-md object-cover mb-3"
        />
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">{character.name}</h2>
        <div className="text-sm sm:text-base text-gray-700 mt-2 space-y-1">
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
        </div>
      </Link>
      <FavoritesToggle characterId={character.id} />
    </div>
  );
}
