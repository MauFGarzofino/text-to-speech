import AlbumSongRow from "../../molecules/media/AlbumSongRow";

interface SongListProps {
  songs: Array<{
    number: number;
    title: string;
    artist: string;
    album: string;
    duration: string;
    imageUrl: string;
  }>;
}

const SongList = ({ songs }: SongListProps) => {
  return (
    <table className="w-full text-left border-separate border-spacing-0">
      <thead>
        <tr className="border-b border-gray-800">
          <th className="pb-3 font-normal text-gray-500">#</th>
          <th className="pb-3 font-normal text-gray-500">TITLE</th>
          <th className="pb-3 font-normal text-gray-500 text-right">
            DURATION
          </th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <AlbumSongRow
            key={song.number}
            number={song.number}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            imageUrl={song.imageUrl}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
