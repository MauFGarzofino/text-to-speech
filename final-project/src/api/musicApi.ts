import axios from 'axios';
import { apiConstants } from './apiConstants';

const { baseURL, apiKey, musixmatchApiUrl, musixmatchApiKey, corsProxy } = apiConstants;

// Fetch the most popular tracks globally
export function fetchTopTracks(limit: number) {
  return axios.get(`${baseURL}?format=json&method=chart.getTopTracks&limit=${limit}&api_key=${apiKey}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching top tracks:", error);
      throw error;
    });
}

// Search for albums by a search term
export function searchAlbums(searchTerm: string) {
  return axios.get(`${baseURL}?format=json&method=album.search&album=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching album search results:", error);
      throw error;
    });
}

// Fetch the most popular artists globally
export function fetchTopArtists(limit: number) {
  return axios.get(`${baseURL}?format=json&method=chart.getTopArtists&limit=${limit}&api_key=${apiKey}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching top artists:", error);
      throw error;
    });
}

// Fetch album information
export function fetchAlbumInfo(artist: string, album: string) {
  return axios.get(`${baseURL}?format=json&method=album.getinfo&artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}&api_key=${apiKey}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching album info:", error);
      throw error;
    });
}

// Fetch the top tags of an album
export function fetchAlbumTopTags(artist: string, album: string) {
  return axios.get(`${baseURL}?format=json&method=album.getTopTags&artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}&api_key=${apiKey}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching album top tags:", error);
      throw error;
    });
}

export function fetchLyrics(track_id: string) {
  return axios.get(`${corsProxy}${musixmatchApiUrl}track.lyrics.get`, {
    params: {
      apikey: `${musixmatchApiKey}`,
      track_id: track_id,
    },
  })
    .then(response => {
      if (response.data.message.body.lyrics) {
        return response.data.message.body.lyrics;
      } else {
        throw new Error('Lyrics not found');
      }
    })
    .catch(error => {
      console.error("Error fetching lyrics:", error);
      throw error;
    });
}

/**
 * Searches for a track using the provided track name and artist name.
 * @param trackName - The name of the track to search for.
 * @param artistName - The name of the artist associated with the track.
 * @returns A Promise that resolves to the track ID of the first matching track.
 * @throws An error if the track is not found.
 */
export function searchTrack(trackName: string, artistName: string) {
  return axios.get(`${corsProxy}${musixmatchApiUrl}track.search`, {
    params: {
      apikey: `${musixmatchApiKey}`,
      q_track: trackName,
      q_artist: artistName,
      f_has_lyrics: 1,
      s_track_rating: 'desc',
    },
  })
    .then(response => {
      const trackList = response.data.message.body.track_list;
      if (trackList.length > 0) {
        return trackList[0].track.track_id;
      } else {
        throw new Error('Track not found');
      }
    })
    .catch(error => {
      console.error("Error searching track:", error);
      throw error;
    });
}

// Función para buscar canciones en Musixmatch
export function searchSongs(searchTerm: string, artistName?: string) {
  return axios.get(`${corsProxy}${musixmatchApiUrl}track.search`, {
    params: {
      apikey: `${musixmatchApiKey}`,
      q_track: searchTerm,
      q_artist: artistName,
      f_has_lyrics: 1, // Opcional, para filtrar solo canciones con letras disponibles
      s_track_rating: 'desc',
      format: 'json'
    },
  })
    .then(response => response.data.message.body.track_list)
    .catch(error => {
      console.error("Error searching songs:", error);
      throw error;
    });
}