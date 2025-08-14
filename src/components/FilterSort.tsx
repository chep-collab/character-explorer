'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function FilterSort() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();

  const [status, setStatus] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const initialStatus = searchParams.get('status') || '';
    setStatus(initialStatus);
  }, [searchParams]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setStatus(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('status', value);
    else params.delete('status');

    router.push(`${pathname}?${params.toString()}`);
  };

  if (!hasMounted) return null; // Prevent mismatch during hydration

  return (
    <div className="flex gap-4 mb-4">
      <select value={status} onChange={handleStatusChange} className="border rounded p-1">
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

