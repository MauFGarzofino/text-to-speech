import Sidebar from "../organisms/navigation/SideBar";
import UserHeader from "../organisms/headers/UserHeader";
import ViewAllSongs from "../organisms/content/ViewAllSongs";

const ViewAllSongsTemplate = () => {
  return (
    <div className="home-page-template flex">
      <Sidebar />
      <div className="content">
        <UserHeader />
        <ViewAllSongs/>
      </div>
    </div>
  )
}

export default ViewAllSongsTemplate
