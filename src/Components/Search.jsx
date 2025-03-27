import React from 'react';

const Search = ({search, setSearch}) => {
    return (
        <div className={'search'}>
            <div>
                <img src={'search.svg'} alt='Search'/>
                <input type='text' placeholder='Search through something' value={search} onChange={e => {
                    setSearch(e.target.value);
                }}/>
            </div>
        </div>
    );
};

export default Search;