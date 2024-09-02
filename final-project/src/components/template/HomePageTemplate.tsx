import "./styles/HomePageTemplate.css";
import UserHeader from "../organisms/headers/UserHeader";
import FirstRow from "../organisms/rows/FirstRow";
import SecondRow from "../organisms/rows/SecondRow";
import ThirdRow from "../organisms/rows/ThirdRow";
import { useNavigate } from "react-router-dom";
import Sidebar from "../organisms/navigation/SideBar";
import HeaderWithButton from "../molecules/utilities/HeaderWithButton";

const HomePageTemplate = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/view-all-albums", { replace: true });
  };

  const handleViewAllPopularSongsClick = () => {
    navigate("/view-all-songs", { replace: true });
  };

  return (
    <div className="home-page-template flex">
      <Sidebar />
      <div className="content">
        <UserHeader />
        <HeaderWithButton title="Popular albums" onClick={handleViewAllClick} />
        <FirstRow limit="4" />
        <HeaderWithButton title="For you" onClick={handleViewAllClick} />
        <SecondRow />
        <ThirdRow onViewAllClick={handleViewAllPopularSongsClick} />
      </div>
    </div>
  );
};

export default HomePageTemplate;
