import { useState } from "react";
import SongInfo from "../../molecules/media/SongInfo";
import LyricsModal from "../../molecules/media/LyricsModal";
import { useLyricsModal } from "../../../hooks/useLyricsModal";
import { getTextToSpeech } from "../../../api/textToSpeech";

interface PopularSongRowProps {
  song: {
    albumImageUrl?: string;
    trackName: string;
    artist: string;
    listeners: number;
  };
}

const PopularSongRow = ({ song }: PopularSongRowProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isModalOpen, lyrics, handleRowClick, handleClose } = useLyricsModal(
    song.trackName,
    song.artist
  );

  const handleIconClick = () => {
    setIsLiked(!isLiked);
  };

  const handleLineClick = async (line: string) => {
    setIsLoading(true);
    try {
      const response = await getTextToSpeech({
        text: line,
        voice: "en-US_AllisonV3Voice",
        accept: "audio/wav",
      });

      const audioUrl = URL.createObjectURL(response.audioContent);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error("Error playing text-to-speech audio:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SongInfo
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
        onLineClick={handleLineClick}
        isLoading={isLoading}
      />
    </>
  );
};

export default PopularSongRow;
