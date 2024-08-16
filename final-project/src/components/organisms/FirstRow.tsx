import React, { useState, useEffect } from 'react';
import MediaCard from '../molecules/MediaCard';
import './FirstRow.css';

const cardsData = [
  { title: 'Chill Vibes', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
  { title: 'Morning Energy', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3' },
  { title: 'Pop Hits', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/26fcd456-6a3d-4439-a7e9-fe477be215d3.jpg' },
  { title: 'New Artists', subtitle: 'Discover', imageUrl: 'https://images.unsplash.com/photo-1683009427470-a36fee396389' },
  { title: 'Chill Vibes', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
  { title: 'Morning Energy', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3' },
  { title: 'Pop Hits', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/26fcd456-6a3d-4439-a7e9-fe477be215d3.jpg' },
  { title: 'Chill Vibes', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
  { title: 'Morning Energy', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3' },
  { title: 'Pop Hits', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/26fcd456-6a3d-4439-a7e9-fe477be215d3.jpg' },
  { title: 'New Artists', subtitle: 'Discover', imageUrl: 'https://images.unsplash.com/photo-1683009427470-a36fee396389' },
  { title: 'Chill Vibes', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
  { title: 'Morning Energy', subtitle: 'Chill', imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3' },
  { title: 'Pop Hits', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/26fcd456-6a3d-4439-a7e9-fe477be215d3.jpg' },
];

const FirstRow: React.FC = () => {
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const breakpoints = [600, 900, 1200, 1500, 1800, 2100, 2400, 2900, 3000]; 
    const cardsToShowByScreenWidth = [1, 2, 3, 4, 4, 4, 5, 6, 14]; 

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const index = breakpoints.findIndex(breakpoint => screenWidth < breakpoint);
      setCardsToShow(cardsToShowByScreenWidth[index === -1 ? cardsToShowByScreenWidth.length - 1 : index]);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fr">
      {cardsData.slice(0, cardsToShow).map((card, index) => (
        <MediaCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          imageUrl={card.imageUrl}
          width="100%"  
          height="150vh"
        />
      ))}
    </div>
  );
};

export default FirstRow;
