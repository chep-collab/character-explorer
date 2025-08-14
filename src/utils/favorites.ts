'use client';

const FAVORITES_KEY = 'favorites';

export const getFavorites = (): number[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
};

export const toggleFavorite = (id: number) => {
  const favs = getFavorites();
  if (favs.includes(id)) {
    const updated = favs.filter((f) => f !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } else {
    favs.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  }
};
