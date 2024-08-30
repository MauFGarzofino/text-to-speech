interface AlbumInfoProps {
  imageUrl: string;
  name: string;
  artist: string;
  songsCount: number;
  listeners: number;
  playcount: number;
  genres: string[];
}

const AlbumInfo = ({
  imageUrl,
  name,
  artist,
  songsCount,
  listeners,
  playcount,
  genres,
}: AlbumInfoProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start mb-12">
      <img
        src={imageUrl}
        alt="Album Cover"
        width={350}
        height={350}
        className="rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
      />
      <div>
        <h1 className="text-6xl font-bold mb-4">{name}</h1>
        <p className="text-xl text-gray-400 mb-2">{artist}</p>
        <p className="text-sm text-gray-500">{songsCount} songs</p>
        <p className="text-sm text-gray-500">Listeners: {listeners}</p>
        <p className="text-sm text-gray-500">Playcount: {playcount}</p>
        <p className="text-sm text-gray-500">Genres: {genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
