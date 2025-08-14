'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface FetchCharactersParams {
  page?: number;
  name?: string;
  status?: string;
}

interface FetchCharactersResponse {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: Character[];
}

const fetchCharacters = async (params: FetchCharactersParams): Promise<FetchCharactersResponse> => {
  const { page = 1, name = '', status = '' } = params;
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`;
  const res = await axios.get(url);
  return res.data;
};

export const useCharacters = (params: FetchCharactersParams) => {
  return useQuery({
    queryKey: ['characters', params],
    queryFn: () => fetchCharacters(params),
    keepPreviousData: true,
  });
};
