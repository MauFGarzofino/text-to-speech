import { useState } from "react";
import ImageAtom from "../../atoms/media/ImageAtom";
import TextAtom from "../../atoms/typography/Text";
import LyricsModal from "../../molecules/media/LyricsModal";
import { useLyricsModal } from "../../../hooks/useLyricsModal";
import { getTextToSpeech } from "../../../api/textToSpeech";

interface SongRowProps {
  number: number;
  title: string;
  artist: string;
  album?: string;
  duration: string;
  imageUrl: string;
}

const AlbumSongRow = ({ number, title, artist, duration, imageUrl }: SongRowProps) => {
  const { isModalOpen, lyrics, handleRowClick, handleClose } = useLyricsModal(title, artist);
  const [isLoading, setIsLoading] = useState(false);

  const handleLineClick = async (line: string) => {
    setIsLoading(true);
    try {
      const response = await getTextToSpeech({
        text: line,
        voice: 'en-US_AllisonV3Voice',
        accept: 'audio/wav',
      });

      const audioUrl = URL.createObjectURL(response.audioContent);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error("Error al convertir la línea de la canción en audio:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <tr
        className="group transform transition-all duration-300 hover:scale-105 cursor-pointer"
        onClick={handleRowClick}
      >
        <td className="py-4 text-gray-400 align-mid pr-6">{number}</td>
        <td className="py-4">
          <div className="flex items-start">
            <ImageAtom
              src={imageUrl}
              alt={`${title} album art`}
              width={56}
              height={56}
              className="mr-4 rounded"
            />
            <div>
              <TextAtom text={title} fontWeight="medium" fontSize="1rem" />
              <TextAtom
                text={artist}
                fontSize="0.875rem"
                fontWeight="normal"
                color="#9CA3AF"
              />
            </div>
          </div>
        </td>
        <td className="py-4 text-gray-400 text-right align-mid pr-6">
          {duration}
        </td>
      </tr>

      <LyricsModal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        trackName={title}
        artist={artist}
        lyrics={lyrics}
        onLineClick={handleLineClick}  
        isLoading={isLoading}
      />
    </>
  );
};

export default AlbumSongRow;
