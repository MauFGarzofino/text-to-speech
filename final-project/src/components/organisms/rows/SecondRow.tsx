import MediaCard from "../../molecules/media/MediaCard";
import "./styles/SecondRow.css";

const SecondRow = () => {
  return (
    <div className="container-sr">
      {cardsData.map((card, index) => (
        <MediaCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          imageUrl={card.imageUrl}
          width="100%"  
          height="160px"
          translateY="-4%" 
        />
      ))}
    </div>
  );
};

export default SecondRow;

const cardsData = [
  { title: 'Your Top Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1586700919867-19977f9d6084' },
  { title: 'Trending Artists', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1551266474-3f56d0e9eadf' },
  { title: 'Vocabulary Sets', subtitle: '', imageUrl: 'https://images.unsplash.com/photo-1564935519461-98813d23e4e9' },
];
