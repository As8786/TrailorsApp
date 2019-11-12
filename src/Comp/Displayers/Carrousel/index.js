import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import "./style.css"

class Carrousel extends React.Component {
    state = {
        currentImg: 1,
        intervalValue: "",
        movies: [
            {
                name: "Deadpool", genre: "Action Adventure Comedy",
                description: `A wisecracking gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.`, rate: 8, year: 2016,
            },
            {
                name: "Django Unchained", genre: "Drama Advanture",
                description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner..`,
                rate: 8.4, year: 2012,
            },
            {
                name: "Interstellar", genre: "Drama Advanture",
                description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`, rate: 8.6, year: 2014,

            },
            {
                name: "Inception",
                description: `Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.`,
                genre: "Science-Fiction Adventure Action", year: 2010, rate: 8.7,
            },
            {
                name: "Joker", year: 2019,
                description: `During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.`,
                genre: "Thriller Drama", rate: 8.6,
            },
            {
                name: "Pulp Fiction",
                description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.`,
                genre: "Thriller", year: 1994, rate: 8.9,
            },
            {
                name: "Iron Man 3",
                description: `When Tony Stark's world is torn apart by a formidable called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
                genre: "Action Adventure Sci-Fi", year: 2013, rate: 7.2
            },
        ]
    }

    componentDidMount() {
        this.handleCarrouselChangement()
    }

    handleCurrentImgDisplay = () => {
        let { currentImg } = this.state
        if (currentImg < 7) {
            return this.setState({
                currentImg: currentImg + 1
            }, () => {
                document.getElementById(`img-${this.state.currentImg - 1}`).className = "img-disabled"
                document.getElementById(`img-${this.state.currentImg}`).className = "img-active"
                document.getElementById(`dot-${this.state.currentImg - 1}`).className = "dot-disabled"
                document.getElementById(`dot-${this.state.currentImg}`).className = "dot-active"

            })
        }
        else return this.setState({
            currentImg: 1
        }, () => {
            document.getElementById("img-7").className = "img-disabled"
            document.getElementById("img-1").className = "img-active"
            document.getElementById("dot-7").className = "dot-disabled"
            document.getElementById("dot-1").className = "dot-active"
        })
    }

    handleCarrouselChangement = () => {
        let intervalValue = setInterval(() => this.handleCurrentImgDisplay(), 5000)
        this.setState({
            intervalValue: intervalValue
        })
    }


    handlePrevNextClick = (action) => {
        let { currentImg, intervalValue } = this.state
        clearInterval(intervalValue)
        if (action === "next" && currentImg < 7) {
            this.setState({
                currentImg: currentImg + 1,
                actived: true
            }, () => {
                document.getElementById(`img-${this.state.currentImg - 1}`).className = "img-disabled"
                document.getElementById(`img-${this.state.currentImg}`).className = "img-active"
                document.getElementById(`dot-${this.state.currentImg - 1}`).className = "dot-disabled"
                document.getElementById(`dot-${this.state.currentImg}`).className = "dot-active"
            })
        } else if (action === "next" && currentImg === 7) {
            this.setState({
                currentImg: 1,
                actived: true
            }, () => {
                document.getElementById("img-7").className = "img-disabled"
                document.getElementById("img-1").className = "img-active"
                document.getElementById("dot-7").className = "dot-disabled"
                document.getElementById("dot-1").className = "dot-active"
            })
        } else if (action === "prev" && currentImg > 1) {
            this.setState({
                currentImg: currentImg - 1,
                actived: true
            }, () => {
                document.getElementById(`img-${this.state.currentImg + 1}`).className = "img-disabled"
                document.getElementById(`img-${this.state.currentImg}`).className = "img-active"
                document.getElementById(`dot-${this.state.currentImg + 1}`).className = "dot-disabled"
                document.getElementById(`dot-${this.state.currentImg}`).className = "dot-active"
            })
        } else if (action === "prev" && currentImg === 1) {
            this.setState({
                currentImg: 7,
                actived: true
            }, () => {
                document.getElementById("img-1").className = "img-disabled"
                document.getElementById("img-7").className = "img-active"
                document.getElementById("dot-1").className = "dot-disabled"
                document.getElementById("dot-7").className = "dot-active"
            })
        }
        this.handleCarrouselChangement()
    }


    handleDotClick = (dotValue) => {
        let { currentImg, intervalValue } = this.state
        clearInterval(intervalValue)
        this.setState({
            currentImg: dotValue
        }, () => {
            document.getElementById(`img-${currentImg}`).className = "img-disabled"
            document.getElementById(`img-${this.state.currentImg}`).className = "img-active"
            document.getElementById(`dot-${currentImg}`).className = "dot-disabled"
            document.getElementById(`dot-${this.state.currentImg}`).className = "dot-active"
        })
        this.handleCarrouselChangement()
    }

    render() {
        return <div className="carrousel-container">
            <div className="img-container ">
                <img src="./img/99.jpg" className="img-active" id="img-1" />
                <img src="./img/10.jpg" className="img-disabled" id="img-2" />
                <img src="./img/9.jpg" className="img-disabled" id="img-3" />
                <img src="./img/8.jpg" className="img-disabled" id="img-4" />
                <img src="./img/7.jpg" className="img-disabled" id="img-5" />
                <img src="./img/5.jpg" className="img-disabled" id="img-6" />
                <img src="./img/110.jpg" className="img-disabled" id="img-7" />

                <div className="anchor-container">
                    <div className="prev" onClick={() => this.handlePrevNextClick('prev')}> &#10094; </div>
                    <div className="next" onClick={() => this.handlePrevNextClick('next')}> &#10095; </div>
                </div>
                <div className="img-info-container">
                    <Link to={`/movie/${this.state.movies[this.state.currentImg - 1].name}`}> <div className="title" title="Watch Trailor"> {this.state.movies[this.state.currentImg - 1].name}  </div> </Link>
                    <div className="description"> {this.state.movies[this.state.currentImg - 1].description}  </div>
                    <div className="footer">
                        <Link to={`/movie/${this.state.movies[this.state.currentImg - 1].name}`}> <button title="Watch Trailor"> <i class="fi-xwsuxl-youtube"></i> Watch </button></Link>
                        <div className="rate-year">
                            <div className="year"> Year : {this.state.movies[this.state.currentImg - 1].year} </div>
                            <div className="rate"> Rated : <i class="fi-xwluxl-star-solid"></i> {this.state.movies[this.state.currentImg - 1].rate} </div>
                        </div>
                    </div>

                </div>
                <div className="dot-container">
                    <div className="dot-active" id="dot-1" onClick={() => this.handleDotClick(1)} />
                    <div className="dot-disabled" id="dot-2" onClick={() => this.handleDotClick(2)} />
                    <div className="dot-disabled" id="dot-3" onClick={() => this.handleDotClick(3)} />
                    <div className="dot-disabled" id="dot-4" onClick={() => this.handleDotClick(4)} />
                    <div className="dot-disabled" id="dot-5" onClick={() => this.handleDotClick(5)} />
                    <div className="dot-disabled" id="dot-6" onClick={() => this.handleDotClick(6)} />
                    <div className="dot-disabled" id="dot-7" onClick={() => this.handleDotClick(7)} />

                </div>
            </div>
        </div>
    }
}

export default Carrousel