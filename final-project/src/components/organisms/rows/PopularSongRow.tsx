import { useState } from "react";
import SongInfo from "../../molecules/media/SongInfo";
import LyricsModal from "../../molecules/media/LyricsModal";
import { useLyricsModal } from "../../../hooks/useLyricsModal";
import { getTextToSpeech } from "../../../api/textToSpeech";
import { supabase } from "../../../supabase/supabaseClient";

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

      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        throw new Error("Error retrieving session");
      }

      const user = sessionData.session?.user;
      if (user) {
        const { error: insertError } = await supabase.from("audio_files").insert({
          user_id: user.id,
          text: line,
          voice: "en-US_AllisonV3Voice",
          language: "en-US",
          audio_url: audioUrl,
          created_at: new Date(),
        });

        if (insertError) {
          console.error("Error saving audio file:", insertError);
        } else {
          console.log("Audio file saved successfully!");
        }
      }
    } catch (error) {
      console.error("Error playing text-to-speech audio:", error);
    } finally {
      setIsLoading(false);
    }
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
        onLineClick={handleLineClick}
        isLoading={isLoading}
      />
    </>
  );
};

export default PopularSongRow;
