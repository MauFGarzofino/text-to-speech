import MediaCard from '../../molecules/media/MediaCard';
import SongTable from '../content/SongTable';
import './styles/ThirdRow.css';
import { useEffect, useState } from 'react';
import { fetchTopTracks } from '../../../api/musicApi';

const ThirdRow = ({ onViewAllClick }: { onViewAllClick: () => void }) => {
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    fetchTopTracks(3) 
      .then(data => {
        const topTracks = data.tracks.track.map((track: any, index: number) => ({
          id: track.mbid || index + 1, 
          imageUrl: track.image ? track.image.find((img: any) => img.size === 'extralarge')['#text'] : 'https://images.unsplash.com/photo-1474959783111-a0f551bdad25', // Imagen de fallback
          trackName: track.name,
          artist: track.artist.name,
          listeners: track.listeners,
        }));

        setSongs(topTracks);
      })
      .catch(error => console.error('Error fetching top tracks:', error));
  }, []);

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
        height="340px"
        translateY="0%"
      />
    </div>
  );
};

export default ThirdRow;