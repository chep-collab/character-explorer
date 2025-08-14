'use client';
import './globals.css';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCharacters } from '../hooks/useCharacters';
import Layout from '../components/Layout';
import CharacterList from '../components/CharacterList';
import CharacterListSkeleton from '../components/CharacterListSkeleton';
import FilterSort from '../components/FilterSort';
import Pagination from '../components/Pagination';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = parseInt(searchParams.get('page') || '1');
  const initialName = searchParams.get('name') || '';
  const initialStatus = searchParams.get('status') || '';

  const [searchTerm, setSearchTerm] = useState(initialName);
  const [debouncedSearch, setDebouncedSearch] = useState(initialName);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchTerm), 400);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const { data, isLoading, error } = useCharacters({
    page: initialPage,
    name: debouncedSearch,
    status: initialStatus,
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch) params.set('name', debouncedSearch);
    else params.delete('name');
    router.replace(`/?${params.toString()}`);
  }, [debouncedSearch, router, searchParams]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4">
        <FilterSort searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {isLoading && <CharacterListSkeleton count={8} />}
        {error && <p className="text-red-500">Error loading characters.</p>}
        {data && data.results.length === 0 && <p>No characters found.</p>}
        {data && data.results.length > 0 && <CharacterList characters={data.results} />}

        {data && data.info && (
          <Pagination
            currentPage={initialPage}
            hasPrev={!!data.info.prev}
            hasNext={!!data.info.next}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </Layout>
  );
}
