'use client';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface FetchCharactersParams {
  page?: number;
  name?: string;
  status?: string;
}

export interface FetchCharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

const fetchCharacters = async (params: FetchCharactersParams): Promise<FetchCharactersResponse> => {
  const { page = 1, name = '', status = '' } = params;
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`;
  const res = await axios.get<FetchCharactersResponse>(url);
  return res.data;
};

export const useCharacters = (
  params: FetchCharactersParams
): UseQueryResult<FetchCharactersResponse, Error> => {
  return useQuery<FetchCharactersResponse, Error>({
    queryKey: ['characters', params],
    queryFn: () => fetchCharacters(params),
    staleTime: 1000 * 60 * 5, // optional: cache for 5 minutes
  });
};
