interface AudioPlayerProps {
  src: string | null;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return src ? <audio controls src={src} /> : null;
};

export default AudioPlayer;
