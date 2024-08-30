import { useState } from "react";
import { fetchLyrics, searchTrack  } from "../api/musicApi";

export const useLyricsModal = (trackName: string, artist: string) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lyrics, setLyrics] = useState<string | null>(null);

  const handleRowClick = () => {
    setIsModalOpen(true);

    searchTrack(trackName, artist)
      .then((trackId) => fetchLyrics(trackId))
      .then((lyricsData) => {
        setLyrics(lyricsData.lyrics_body);
      })
      .catch(() => {
        setLyrics("Lyrics not available.");
      });
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setLyrics(null);
  };

  return {
    isModalOpen,
    lyrics,
    handleRowClick,
    handleClose,
  };
};
