import MediaCard from '../../molecules/media/MediaCard';
import './styles/FirstRow.css';

const FirstRow = () => {

  return (
    <div className="container-fr">
      {cardsData.map((card, index) => (
        <MediaCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          imageUrl={card.imageUrl}
          width="100%"  
          height="150px"
          translateY="-22%" 
        />
      ))}
    </div>
  );
};

export default FirstRow;

const cardsData = [
  { title: 'Chill Vibes', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
  { title: 'Morning Energy', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b' },
  { title: 'Pop Hits', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/26fcd456-6a3d-4439-a7e9-fe477be215d3.jpg' },
  { title: 'New Artists', subtitle: 'Discover', imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86' },
];