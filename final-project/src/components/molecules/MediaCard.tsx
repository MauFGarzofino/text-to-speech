import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import "./MediaCard.css"

interface MediaCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  width?: number | string;
  height?: number | string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  subtitle,
  imageUrl,
  width = 245,
  height = 120,
}) => {
  return (
    <Card className="media-card" style={{ position: 'relative', borderRadius: 12, maxWidth: width, minWidth: width }}>
      <CardMedia
        component="img"
        alt={title}
        height={height}
        image={imageUrl}
        title={title}
        style={{
          objectPosition: '50% 30%', 
          objectFit: 'cover', 
        }}
      />
      <CardContent className="media-card-content"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
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
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;