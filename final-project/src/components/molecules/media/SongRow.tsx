import "./styles/SongRow.css";
import { useState } from "react";
import HeartIcon from "../../../assets/Heart";
import HeartFillIcon from "../../../assets/HeartFill";

interface SongRowProps {
  song: {
    id: number;
    imageUrl: string;
    trackName: string;
    likes: number;
  };
}

const SongRow = ({ song }: SongRowProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleIconClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="song-row">
      <img src={song.imageUrl} alt={song.trackName} className="song-image" />
      <span className="song-id">{song.id}</span>
      <span className="song-heart" onClick={handleIconClick}>
        {isLiked ? <HeartFillIcon /> : <HeartIcon />}
      </span>
      <span className="song-name">{song.trackName}</span>
      <span className="song-likes">{song.likes.toLocaleString()}</span>
    </div>
  );
};

export default SongRow;
