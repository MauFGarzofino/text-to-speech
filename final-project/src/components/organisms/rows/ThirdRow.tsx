import MediaCard from '../../molecules/media/MediaCard';
import SongTable from '../content/SongTable';
import './styles/ThirdRow.css';

const ThirdRow = ({ onViewAllClick }: { onViewAllClick: () => void }) => {
  return (
    <div className="container-tr">
      <SongTable
        title="Popular songs"
        songs={songs}
        onViewAllClick={onViewAllClick}
      />
      <MediaCard
        title="Top Tracks"
        subtitle="Best of 2024"
        imageUrl="https://images.unsplash.com/photo-1469443168033-4623821959af"
        width="100%"
        height="300px"
        translateY="0%"
      />
    </div>
  );
};

export default ThirdRow;

const songs = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25",
    trackName: "Track Name",
    likes: 42569,
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1693835777292-cf103dcd2324",
    trackName: "Track Name",
    likes: 42569,
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25",
    trackName: "Track Name",
    likes: 42569,
  },
];
