'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation';
import FavoritesToggle from '../../../components/FavoritesToggle';
import Layout from '../../../components/Layout';

const fetchCharacter = async (id: string) => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return res.data;
};

function CharacterDetailSkeleton() {
  return (
    <div className="max-w-md mx-auto p-4 relative border rounded shadow-md bg-gray-200 dark:bg-gray-700 animate-pulse">
      <div className="w-full h-64 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-1 w-1/2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-1 w-1/2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
    </div>
  );
}

export default function CharacterDetail() {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id),
    enabled: !!id,
  });

  if (isLoading) return <Layout><CharacterDetailSkeleton /></Layout>;
  if (error) return <Layout><p>Error loading character.</p></Layout>;

  return (
    <Layout>
      <div className="max-w-md mx-auto p-4 relative border rounded shadow-md bg-white dark:bg-gray-800">
        <img src={data.image} alt={data.name} className="rounded w-full" />
        <h1 className="text-2xl font-bold mt-2">{data.name}</h1>
        <p>Status: {data.status}</p>
        <p>Species: {data.species}</p>
        <p>Gender: {data.gender}</p>
        <FavoritesToggle characterId={data.id} />
      </div>
    </Layout>
  );
}
