import React from "react";
import "./HomePageTemplate.css";
import UserHeader from "../organisms/UserHeader";
import NavigationDrawer from "../organisms/NavigationDrawer";
import FirstRow from "../organisms/FirstRow";
import SecondRow from "../organisms/SecondRow";
import ButtonAtom from "../atoms/ButtonAtom";
import TextAtom from "../atoms/TextAtom";
import { useNavigate } from "react-router-dom";

const HomePageTemplate: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/lyrics", { replace: true });
  };

  return (
    <div className="home-page-template">
      <NavigationDrawer />
      <div className="content">
        <UserHeader />
        <div className="header-row">
          <TextAtom text="Popular music genres" fontSize="24px" />
          <ButtonAtom text="View all" onClick={handleViewAllClick} />
        </div>
        <FirstRow />
        <div className="header-row">
          <TextAtom text="For you" fontSize="24px" />
          <ButtonAtom text="View all" onClick={handleViewAllClick} />
        </div>
        <SecondRow />
      </div>
    </div>
  );
};

export default HomePageTemplate;
