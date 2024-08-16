import "./NavigationDrawer.css";
import NavItemMolecule from "../molecules/NavItemMolecule";

const NavigationDrawer = () => {
  return (
    <div className="navigation-drawer">
      <nav className="nav-drawer">
        <ul>
          <li><NavItemMolecule type="home" text="Home" /></li>
          <li><NavItemMolecule type="search" text="Search" /></li>
          <li><NavItemMolecule type="vocabulary" text="Vocabulary" /></li>
          <li><NavItemMolecule type="lyrics" text="Lyrics" /></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationDrawer;
