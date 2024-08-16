import React, { useEffect, useState } from 'react';
import MediaCard from "../molecules/MediaCard";
import "./SecondRow.css";

const cardsData = [
  { title: 'Your Top Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1491466424936-e304919aada7' },
  { title: 'Trending Artists', subtitle: '', imageUrl: 'https://wallpapercave.com/wp/wp12580437.jpg' },
  { title: 'Vocabulary Sets', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765' },
  { title: 'Vocabulary Sets', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765' },
  { title: 'Trending Artists', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/fbd8b29c-67ef-4a83-a005-a87ba2dd5860.jpg' },
  { title: 'Your Top Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1491466424936-e304919aada7' },
  { title: 'Your Top Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1491466424936-e304919aada7' },
  { title: 'Trending Artists', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/fbd8b29c-67ef-4a83-a005-a87ba2dd5860.jpg' },
  { title: 'Vocabulary Sets', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765' },
  { title: 'Your Top Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1491466424936-e304919aada7' },
  { title: 'Trending Artists', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/fbd8b29c-67ef-4a83-a005-a87ba2dd5860.jpg' },
  { title: 'Vocabulary Sets', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765' },
  { title: 'Your Top Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1491466424936-e304919aada7' },
  { title: 'Trending Artists', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/fbd8b29c-67ef-4a83-a005-a87ba2dd5860.jpg' },
  { title: 'Vocabulary Sets', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765' },
  { title: 'Your Top Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1491466424936-e304919aada7' },
  { title: 'Trending Artists', subtitle: '', imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/fbd8b29c-67ef-4a83-a005-a87ba2dd5860.jpg' },
  { title: 'Vocabulary Sets', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765' },
];

const SecondRow: React.FC = () => {
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
          height="165vh"
        />
      ))}
    </div>
  );
};

export default SecondRow;
