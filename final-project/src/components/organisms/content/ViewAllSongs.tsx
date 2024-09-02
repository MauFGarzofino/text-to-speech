import { useState, useEffect } from "react";
import SearchBar from "../../molecules/navigation/SearchBar";
import PopularSongRow from "../rows/PopularSongRow";
import { searchSongs } from "../../../api/musicApi"; 
import { formatDate } from "../../../utils/FormatDate";

const ViewAllSongs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    searchSongs(searchTerm || "light")
      .then((songsData) => {
        console.log("Full API response:", songsData);

        const formattedSongs = songsData.map((song: any) => ({
          trackName: song.track.track_name,
          artist: song.track.artist_name,
          albumImageUrl: song.track.album_coverart_100x100, 
          listeners: formatDate(song.track.updated_time),
        }));

        setSongs(formattedSongs);
      })
      .catch(error => console.error("Error fetching songs:", error));
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="view-all-songs">
      <SearchBar placeholder="Search for songs" onSearch={handleSearch} />
      <div className="song-list">
        {songs.map((song, index) => (
          <PopularSongRow key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default ViewAllSongs;
