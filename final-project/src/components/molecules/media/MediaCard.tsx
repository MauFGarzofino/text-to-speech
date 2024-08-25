import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import "./styles/MediaCard.css";
import { useNavigate } from "react-router-dom";

interface MediaCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  width?: number | string;
  height?: number | string;
  translateY?: string;
}

const MediaCard = ({
  title,
  subtitle,
  imageUrl,
  width,
  height,
  translateY,
}: MediaCardProps) => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/songs", { replace: true });
  };

  return (
    <Card
      onClick={handleViewAllClick}
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
          variant="subtitle1"
          style={{
            fontWeight: 700,
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          component="div"
          variant="h5"
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
