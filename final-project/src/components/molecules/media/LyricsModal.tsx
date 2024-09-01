import { Box, Modal, Typography } from "@mui/material";
import ButtonAtom from "../../atoms/buttons/PrimaryButton";
import "./styles/LyricsModal.css";

interface LyricsModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  trackName: string;
  artist: string;
  lyrics: string | null;
  onLineClick: (line: string) => void;
  isLoading: boolean;
}

const LyricsModal = ({
  isModalOpen,
  handleClose,
  trackName,
  artist,
  lyrics,
  onLineClick,
  isLoading,
}: LyricsModalProps) => {
  const formatLyrics = (lyrics: string) => {
    const [mainLyrics, disclaimer] = lyrics.split("...");
    const lines = mainLyrics.split("\n");

    return (
      <>
        <Typography
          id="lyrics-modal-description"
          className="lyrics-modal-description"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className="lyrics-line"
              onClick={() => onLineClick(line)}
              style={{ cursor: 'pointer', color: isLoading ? 'gray' : 'inherit' }}
            >
              {line}
            </div>
          ))}
        </Typography>
        <Typography
          id="lyrics-disclaimer"
          className="lyrics-modal-disclaimer"
        >
          {disclaimer?.trim()}
        </Typography>
      </>
    );
  };

  return (
    <Modal
      className="lyrics-modal"
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="lyrics-modal-title"
      aria-describedby="lyrics-modal-description"
    >
      <Box className="lyrics-modal-box custom-scrollbar">
        <Typography
          id="lyrics-modal-title"
          className="lyrics-modal-title"
          variant="h5"
          component="h2"
        >
          {trackName}
        </Typography>
        <Typography
          id="lyrics-modal-artist"
          className="lyrics-modal-artist"
          variant="h6"
          component="h3"
        >
          {artist}
        </Typography>
        {lyrics ? (
          formatLyrics(lyrics)
        ) : (
          <Typography className="lyrics-modal-description">Loading...</Typography>
        )}
        <ButtonAtom text="Close" onClick={handleClose} />
      </Box>
    </Modal>
  );
};

export default LyricsModal;
