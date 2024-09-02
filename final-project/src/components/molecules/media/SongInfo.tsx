import HeartFillIcon from "../../../assets/HeartFill";
import HeartIcon from "../../../assets/Heart";
import "./styles/SongInfo.css";

interface SongInfoProps {
  id?: number;
  albumImageUrl?: string;
  trackName: string;
  artist: string;
  listeners: number;
  isLiked?: boolean;
  onIconClick: () => void;
  onRowClick: () => void;
}

const PopularSongInfo = ({
  albumImageUrl,
  trackName,
  artist,
  listeners,
  isLiked,
  onIconClick,
  onRowClick,
}: SongInfoProps) => {
  const DEFAULT_ALBUM_IMAGE =
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb";

  return (
    <div className="song-row" onClick={onRowClick}>
      <img
        src={albumImageUrl || DEFAULT_ALBUM_IMAGE}
        alt={trackName}
        className="song-image"
      />
      <span className="song-heart" onClick={onIconClick}>
        {isLiked ? <HeartFillIcon /> : <HeartIcon />}
      </span>
      <div className="song-info">
        <span className="song-name">{trackName}</span>
        <span className="song-artist">{artist}</span>
      </div>
      <p className="song-listeners py-2 text-gray-400 text-right align-mid pr-2">
        {listeners.toLocaleString()}
      </p>
    </div>
  );
};

export default PopularSongInfo;
