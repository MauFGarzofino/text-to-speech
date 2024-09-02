import Sidebar from "../organisms/navigation/SideBar";
import UserHeader from "../organisms/headers/UserHeader";
import ViewAllSongs from "../organisms/content/ViewAllSongs";

const ViewAllSongsTemplate = () => {
  return (
    <div className="home-page-template flex">
      <Sidebar />
      <div className="content flex-grow">
        <UserHeader />
        <div className="view-all-songs-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ViewAllSongs />
        </div>
      </div>
    </div>
  );
}

export default ViewAllSongsTemplate;
