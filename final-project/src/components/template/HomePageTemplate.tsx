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
    navigate("/lyrics", { replace: true });
  };

  return (
    <div className="home-page-template flex">
      <Sidebar />
      <div className="content">
        <UserHeader />
        <HeaderWithButton title="Popular music genres" onClick={handleViewAllClick} />
        <FirstRow />
        <HeaderWithButton title="For you" onClick={handleViewAllClick} />
        <SecondRow />
        <ThirdRow onViewAllClick={handleViewAllClick} />
      </div>
    </div>
  );
};

export default HomePageTemplate;