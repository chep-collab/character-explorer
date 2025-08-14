// src/components/Pagination.tsx
'use client';

type Props = {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, hasNext, hasPrev, onPageChange }: Props) {
  return (
    <div className="flex justify-between mt-4">
      <button
        disabled={!hasPrev}
        onClick={() => onPageChange(currentPage - 1)}
        className="btn bg-gray-200 text-gray-800 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => onPageChange(currentPage + 1)}
        className="btn bg-gray-200 text-gray-800 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
