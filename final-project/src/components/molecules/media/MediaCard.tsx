import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import "./styles/MediaCard.css";
import { useNavigate } from "react-router-dom";
 
interface AlbumSongRowProps  {
  title: string;
  subtitle: string;
  imageUrl: string;
  width?: number | string;
  height?: number | string;
  translateY?: string;
}

const MediaCard = ({ title, subtitle, imageUrl, width, height, translateY }: AlbumSongRowProps ) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/songs', { state: { artist: title, album: subtitle } });
  };

  return (
    <Card
      onClick={handleClick}
      className="media-card"
      style={{ borderRadius: "16px", maxWidth: width, maxHeight: height }}
    >
      <CardMedia
        className="imgCard"
        component="img"
        alt={title}
        height={height}
        image={imageUrl}
        title={title}
        style={{
          transform: `translate(0%, ${translateY})`,
        }}
      />
      <CardContent className="media-card-content">
        <Typography
          component="div"
          variant="subtitle2"
          style={{
            fontWeight: 600,
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          component="div"
          variant="h6"
          style={{
            fontWeight: 900,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
