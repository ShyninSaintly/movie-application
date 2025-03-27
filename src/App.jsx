import React, {useState} from 'react';
import Search from "./Components/Search.jsx";

const App = () => {
    const [search, setSearch] = useState('');
    return (
        <main>
            <div className={'pattern'}/>
            <div className={'wrapper'}>
                <header>
                    <img src='../public/hero.png' alt='Hero Banner'></img>
                    <h1>Find <span className={'text-gradient'}>Movies</span> You`ll Enjoy Without Hassle</h1>
                </header>
                <Search search={search} setSearch={setSearch}/>
            </div>
        </main>
    );
};

export default App;