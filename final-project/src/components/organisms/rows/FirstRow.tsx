import { useEffect, useState } from "react";
import MediaCard from "../../molecules/media/MediaCard";
import "./styles/FirstRow.css";
import { searchAlbums } from "../../../api/musicApi";

const defaultImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b",
  "https://assets.api.uizard.io/api/cdn/stream/26fcd456-6a3d-4439-a7e9-fe477be215d3.jpg",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
];

const FirstRow = ({ searchTerm, limit }: any) => {
  const [cardsData, setCardsData] = useState<any[]>([]);

  useEffect(() => {
    searchAlbums(searchTerm || "love")
      .then((data) => {
        const albums = data.results.albummatches.album.map(
          (album: any, index: number) => ({
            title: album.artist,
            subtitle: album.name,
            imageUrl: defaultImages[index % defaultImages.length],
          })
        );

        setCardsData(albums.slice(0, limit));
      })
      .catch((error) =>
        console.error("Error fetching album search results:", error)
      );
  }, [searchTerm, limit]);

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
