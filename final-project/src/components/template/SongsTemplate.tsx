import Sidebar from "../organisms/navigation/SideBar";
import UserHeader from "../organisms/headers/UserHeader";
import SongList from "../organisms/content/SongList";

const SongsTemplate = () => {
  const songs = [
    {
      number: 1,
      title: "Starlight Dreams",
      artist: "Luna Echo",
      album: "Cosmic Journey",
      duration: "3:45",
      imageUrl: "https://images.unsplash.com/photo-1586700919867-19977f9d6084",
    },
    {
      number: 2,
      title: "Midnight Serenade",
      artist: "Stella Moon",
      album: "Nocturnal Melodies",
      duration: "4:12",
      imageUrl: "https://images.unsplash.com/photo-1586700919867-19977f9d6084",
    },
    {
      number: 3,
      title: "Sunset Symphony",
      artist: "Aurora Sound",
      album: "Nature's Harmony",
      duration: "5:20",
      imageUrl: "https://images.unsplash.com/photo-1586700919867-19977f9d6084",
    }
  ];

  return (
    <div className="home-page-template flex">
      <Sidebar />
      <div className="content">
        <UserHeader />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start mb-12">
            <img
              src="https://images.unsplash.com/photo-1586700919867-19977f9d6084"
              alt="Album Cover"
              width={350}
              height={350}
              className="rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
            />
            <div>
              <h1 className="text-6xl font-bold mb-4">Eclectric Mix</h1>
              <p className="text-xl text-gray-400 mb-2">Various Artists</p>
              <p className="text-sm text-gray-500">50 songs, 2h 59min</p>
            </div>
          </div>

          <SongList songs={songs} />
        </div>
      </div>
    </div>
  );
};

export default SongsTemplate;
