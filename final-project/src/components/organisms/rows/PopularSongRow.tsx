import { useState } from "react";
import SongInfo from "../../molecules/media/SongInfo";
import LyricsModal from "../../molecules/media/LyricsModal";
import { useLyricsModal } from "../../../hooks/useLyricsModal";

interface PopularSongRowProps {
  song: {
    id: number;
    albumImageUrl?: string;
    trackName: string;
    artist: string;
    listeners: number;
  };
}

const PopularSongRow = ({ song }: PopularSongRowProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { isModalOpen, lyrics, handleRowClick, handleClose } = useLyricsModal(
    song.trackName,
    song.artist
  );

  const handleIconClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <SongInfo
        id={song.id}
        albumImageUrl={song.albumImageUrl}
        trackName={song.trackName}
        artist={song.artist}
        listeners={song.listeners}
        isLiked={isLiked}
        onIconClick={handleIconClick}
        onRowClick={handleRowClick}
      />
      <LyricsModal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        trackName={song.trackName}
        artist={song.artist}
        lyrics={lyrics}
      />
    </>
  );
};

export default PopularSongRow;
