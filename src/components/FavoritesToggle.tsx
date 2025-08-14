'use client';

import { useState, useEffect } from 'react';
import { getFavorites, toggleFavorite } from '../utils/favorites';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface Props { characterId: number }

export default function FavoritesToggle({ characterId }: Props) {
  const [isFav, setIsFav] = useState(false);

  // Initialize
  useEffect(() => {
    setIsFav(getFavorites().includes(characterId));
  }, [characterId]);

  const handleClick = () => {
    // Optimistic UI update
    setIsFav((prev) => !prev);
    toggleFavorite(characterId);
  };

  return (
    <button
      className="absolute top-2 right-2 text-yellow-500"
      onClick={handleClick}
      aria-label="Toggle Favorite"
    >
      {isFav ? <AiFillStar size={24} /> : <AiOutlineStar size={24} />}
    </button>
  );
}
