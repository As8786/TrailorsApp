import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

const SearchComp = () => {
    let [searchValue, setSearchValue] = useState('')

    return <div className="search" id="search">
        <input placeholder='Search...' onChange={(e) => setSearchValue(e.target.value)} />
        <button> Search </button>
        <div className="search-preselection">
            <div className="search-preselection-item">
                <div className="search-preselection-img">
                    <img src={movie.img} />
                </div>
                <div className="search-preselection-infos">
                    <div className="name"> {movie.name} </div>
                    <div className="year">  {movie.year} </div>
                    <div className="rate"> Rated : <i class="fi-xwluxl-star-solid"></i> {movie.rate} </div>
                    <div className="stars">Genre : {movie.genre.map((el, i) => <span key={i}> {el}</span>)}</div>
                </div>
            </div>

        </div>
    </div>
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {})(SearchComp)


let movie = {
    name: "Snatch ", language: ["French", "English"], stars: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"], director: "Guy Ritchie", yot: "9Jar2XkBboo",
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    genre: ["Comedy", "Sci-Fi"], year: 2000, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX684_AL_.jpg"
}