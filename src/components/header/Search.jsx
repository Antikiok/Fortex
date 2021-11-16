import React from 'react';
import {FaSearch} from 'react-icons/Fa'
import './header.scss';

const Search = () => {
    const [searchValue,setSearchValue] = React.useState('');
    const handleSearchValueChange= (e)=> setSearchValue(e.target.value);

    return (<form className="search">
        <input type='text' name="search" className="search__input" value={searchValue} onChange={handleSearchValueChange}/>
         <button type="submit" className="search__button">
            <FaSearch/>
          </button>
    </form>)
}

export default Search;