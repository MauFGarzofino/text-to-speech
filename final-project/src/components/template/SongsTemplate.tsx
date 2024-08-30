import Sidebar from "../organisms/navigation/SideBar";
import UserHeader from "../organisms/headers/UserHeader";
import SongList from "../organisms/content/SongList";
import AlbumInfo from "../organisms/headers/AlbumInfo";
import { useLocation } from "react-router-dom";
import { useAlbumData } from "../../hooks/useAlbumData";

const SongsTemplate = () => {
  const location = useLocation();
  const { artist, album } = location.state || {
    artist: "Billie Eilish",
    album: "HIT ME HARD AND SOFT",
  };

  const { songs, albumInfo, topTags, error } = useAlbumData(artist, album);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="home-page-template flex">
      <Sidebar />
      <div className="content">
        <UserHeader />
        <div className="max-w-6xl mx-auto">
          {albumInfo && (
            <AlbumInfo
              imageUrl={albumInfo.imageUrl}
              name={albumInfo.name}
              artist={albumInfo.artist}
              songsCount={songs.length}
              listeners={albumInfo.listeners}
              playcount={albumInfo.playcount}
              genres={topTags}
            />
          )}
          <SongList songs={songs} />
        </div>
      </div>
    </div>
  );
};

export default SongsTemplate;
