import CharacterCardSkeleton from './CharacterCardSkeleton';

interface Props { count?: number }

export default function CharacterListSkeleton({ count = 8 }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <CharacterCardSkeleton key={i} />
      ))}
    </div>
  );
}
