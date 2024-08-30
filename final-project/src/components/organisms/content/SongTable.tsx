import PopularSongRow from "../../organisms/rows/PopularSongRow";
import HeaderWithButton from "../../molecules/utilities/HeaderWithButton";
import "./styles/SongTable.css";

interface SongTableProps {
  title: string;
  songs: Array<{
    id: number;
    albumImageUrl?: string;
    trackName: string;
    artist: string;
    listeners: number;
  }>;
  onViewAllClick: () => void;
}

const SongTable = ({ title, songs, onViewAllClick }: SongTableProps) => {
  return (
    <div className="song-table">
      <HeaderWithButton title={title} onClick={onViewAllClick} />
      <div className="song-list">
        {songs.map((song) => (
          <PopularSongRow key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongTable;
