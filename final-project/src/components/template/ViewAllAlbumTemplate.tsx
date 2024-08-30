import Sidebar from "../organisms/navigation/SideBar";
import UserHeader from "../organisms/headers/UserHeader";
import ViewAllAlbums from "../organisms/content/ViewAllAlbums";

const ViewAllAlbumTemplate = () => {
  return (
    <div className="home-page-template flex">
      <Sidebar />
      <div className="content">
        <UserHeader />
        <ViewAllAlbums/>
      </div>
    </div>
  )
}

export default ViewAllAlbumTemplate
