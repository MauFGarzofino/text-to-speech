import SongRow from "../../molecules/media/SongRow";
import HeaderWithButton from "../../molecules/utilities/HeaderWithButton";
import "./styles/SongTable.css";

interface SongTableProps {
  title: string;
  songs: Array<{
    id: number;
    imageUrl: string;
    trackName: string;
    likes: number;
  }>;
  onViewAllClick: () => void;
}

const SongTable = ({ title, songs, onViewAllClick }: SongTableProps) => {
  return (
    <div className="song-table">
      <HeaderWithButton title={title} onClick={onViewAllClick} />{" "}

      <div className="song-list">
        {songs.map((song) => (
          <SongRow key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongTable;
