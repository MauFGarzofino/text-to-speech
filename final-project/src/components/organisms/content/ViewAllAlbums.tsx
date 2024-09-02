import { useState } from 'react';
import SearchBar from '../../molecules/navigation/SearchBar';
import FirstRow from '../rows/FirstRow';
import ButtonAtom from '../../atoms/buttons/PrimaryButton';
import './styles/ViewAllAlbums.css';

const ViewAllAlbums = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [albumLimit, setAlbumLimit] = useState(16);  

  const handleSearch = (term: any) => {
    setSearchTerm(term);
  };

  const handleLoadMore = () => {
    setAlbumLimit(prevLimit => prevLimit + 8); 
  };

  return (
    <div className="view-all-albums">
      <SearchBar placeholder="Search by artist or album" onSearch={handleSearch} />
      <FirstRow searchTerm={searchTerm} limit={albumLimit} />
      <div className="load-more-container">
        <ButtonAtom text="Load more" onClick={handleLoadMore} />
      </div>
    </div>
  );
};

export default ViewAllAlbums;
