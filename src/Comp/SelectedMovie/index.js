import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectMovie, onStarSearchLickClickAction } from "../../Actions/actionsCreator"
import ScrollBtn from "../Displayers/ScrollButton"
import "./style.css"

class SelectedMovie extends React.PureComponent {
    state = {
        btnValue: "Show More",
        movie: {
            name: "",
            director: "",
            description: "",
            genre: [],
            year: "",
            rate: "",
            stars: []
        }
    }

    componentDidMount() {
        this.props.selectMovie(this.props.name)
    }

    toggleBtnValue = () => {
        let { btnValue } = this.state
        if (btnValue === "Show More") {
            this.setState({
                btnValue: "Show Less"
            })
        }
        else this.setState({
            btnValue: "Show More"
        })
    }

    onShowMoreClick = () => {
        this.toggleBtnValue()
        if (document.getElementById('more-infos').className === "more-infos-active")
            document.getElementById('more-infos').className = "more-infos-disabled"
        else document.getElementById('more-infos').className = "more-infos-active"
    }

    render() {
        let movie = this.props.selectedMovie
        return <div className="selected-movie-container">
            <div className="player-wraper">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.yot}`} frameborder="0" gesture="media" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="movie-infos">
                <div className="movie-img-description">
                    <div className="img-container">
                        <img src={movie.img} title={movie.name} />
                    </div>
                    <div className="description">
                        <div className="title"> {movie.name} <span> ({movie.year}) </span> </div>
                        <div className="rate"> Rated :  <i class="fi-xwluxl-star-solid"></i> {movie.rate} </div>
                        <div className="synopsis"> {movie.description} </div>
                    </div>
                </div>
                <div className="show-more-btn-container">
                    {this.state.btnValue === "Show More" ? <button onClick={this.onShowMoreClick} id="show-more-btn">   {this.state.btnValue} <i class="fi-xnsdxl-chevron-solid"></i> </button> :
                        <button onClick={this.onShowMoreClick} id="show-more-btn"> {this.state.btnValue} <i class="fi-xnsuxl-chevron-solid"></i></button>}
                </div>
                <div id="more-infos" className="more-infos-disabled" >
                    <div className="director">
                        <span id="section-span" >Director : </span>
                        <span><Link to={`/search/star/${movie.director}`} onClick={() => this.props.onStarSearchLickClickAction(movie.director)}>  {movie.director}</Link></span>
                    </div>
                    <div className="actors">
                        <span id="section-span" > Actors : </span>
                        {movie.stars.map((el, i) => <span key={i} > <Link to={`/search/star/${el}`} onClick={() => this.props.onStarSearchLickClickAction(el)}> {el} </Link> </span>)}
                    </div>
                    <div className="genre">
                        <span id="section-span" >Genres : </span>
                        {movie.genre.map((el, i) => <span key={i} > {el} </span>)}
                    </div>
                </div>
            </div>
            <ScrollBtn />
        </div>
    }
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.SelectedMovieReducer
    }
}



export default connect(mapStateToProps, { selectMovie, onStarSearchLickClickAction })(SelectedMovie)
