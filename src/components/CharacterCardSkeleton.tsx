export default function CharacterCardSkeleton() {
  return (
    <div className="border rounded p-2 relative animate-pulse bg-gray-200 dark:bg-gray-700">
      <div className="w-full h-40 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
      <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto"></div>
    </div>
  );
}
