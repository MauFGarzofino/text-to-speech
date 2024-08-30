import { useState, useEffect } from "react";
import { fetchAlbumInfo, fetchAlbumTopTags } from "../api/musicApi";
import { formatDuration } from "../utils/FormatDuration";

export function useAlbumData(artist: string, album: string) {
  const [songs, setSongs] = useState<any[]>([]);
  const [albumInfo, setAlbumInfo] = useState<any>(null);
  const [topTags, setTopTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumData = await fetchAlbumInfo(artist, album);
        const tagsData = await fetchAlbumTopTags(artist, album);

        setAlbumInfo({
          name: albumData.album.name,
          artist: albumData.album.artist,
          imageUrl: albumData.album.image.find(
            (img: any) => img.size === "extralarge"
          )["#text"],
          listeners: albumData.album.listeners,
          playcount: albumData.album.playcount,
        });

        const tracks = albumData.album.tracks.track.map((track: any) => ({
          number: track["@attr"].rank,
          title: track.name,
          artist: track.artist.name,
          duration: formatDuration(track.duration),
          imageUrl: albumData.album.image.find(
            (img: any) => img.size === "extralarge"
          )["#text"],
        }));

        setSongs(tracks);

        const tags = tagsData.toptags.tag.slice(0, 3).map((tag: any) => tag.name);
        setTopTags(tags);
      } catch (err) {
        console.error("Error fetching album info:", err);
        setError("Failed to fetch album data");
      }
    };

    fetchData();
  }, [artist, album]);

  return { songs, albumInfo, topTags, error };
}
