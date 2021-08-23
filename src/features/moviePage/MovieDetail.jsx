import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { MOVIE_COMING_PATH, MOVIE_SEARCH_PATH, MOVIE_SHOWING_PATH } from '../../constant/route';
import { filterMovies } from '../../redux/action/filterAction';
import { getFilterMoviesRequest, getOneMoviesRequest } from '../../redux/action/moviesAction';
import { searchMovieRequest } from '../../redux/action/searchAction';
import iconFinger from '../../assets/img/ico_finger.png';


function MovieDetail() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { slug } = useParams();
    const { oneMovie } = useSelector(state => state.movies)
    const [toggle, setToggle] = useState({
        description: true,
        trailer: false
    })

    useEffect(() => {
        dispatch(getOneMoviesRequest(slug));
    }, [])

    const handleToggle = () => {
        setToggle({
            ...toggle,
            description: toggle.description ? false : true,
            trailer: toggle.trailer ? false : true,
        })
    }

    return (
        <main className="main__detailMovie">
            <Container>
                <div className="main__detailMovie__title">
                    <h2>{t('movies.movie_detail')}</h2>
                </div>
                {
                    oneMovie.map(movie => {
                        return (
                            <div className="main__detailMovie__content" key={movie._id}>
                                <div className="main__detailMovie__content-img">
                                    <img src={movie.avatar} alt={movie.name} />
                                </div>
                                <div className="main__detailMovie__content-info">
                                    <div className="movie-name">
                                        <h3>{movie.name}</h3>
                                    </div>
                                    <div className="movie-info movie-director">
                                        <span className="movie-info--bold">{t('movies.director')}: </span>
                                        <span className="movie-info--normal">{movie.director}</span>
                                    </div>
                                    <div className="movie-info movie-cast">
                                        <span className="movie-info--bold">{t('movies.cast')}: </span>
                                        <span className="movie-info--normal">{movie.cast}</span>
                                    </div>
                                    <div className="movie-info movie-genre">
                                        <span className="movie-info--bold">{t('movies.genre')}: </span>
                                        <span className="movie-info--normal">{movie.genre}</span>
                                    </div>
                                    <div className="movie-info movie-releaseDate">
                                        <span className="movie-info--bold">{t('movies.releaseDate')}: </span>
                                        <span className="movie-info--normal">{movie.releaseDate}</span>
                                    </div>
                                    <div className="movie-info movie-runningTime">
                                        <span className="movie-info--bold">{t('movies.runningTime')}: </span>
                                        <span className="movie-info--normal">{movie.runningTime}</span>
                                    </div>
                                    <div className="movie-info movie-language">
                                        <span className="movie-info--bold">{t('movies.language')}: </span>
                                        <span className="movie-info--normal">{movie.language}</span>
                                    </div>
                                    <div className="movie-info movie-rate">
                                        <span className="movie-info--bold">{t('movies.rate')}: </span>
                                        <span className="movie-info--bold">{movie.rate}</span>
                                    </div>
                                    <div className="order-btn">
                                        <Link to="/" style={{ display: movie.status === "coming" ? "none" : "flex" }}>
                                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cate-booking.png" alt="" />
                                            <p>{t('movies.order')}</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="main__detailMovie__toggle-content">
                                    <ul className="toggle-tab">
                                        <li onClick={() => handleToggle()}>
                                            <img src={iconFinger} alt="icon finger" style={{ display: toggle.description ? "block" : "none" }} />
                                            {t('movies.description')}
                                        </li>
                                        <li onClick={() => handleToggle()}>
                                            <img src={iconFinger} alt="icon finger" style={{ display: toggle.trailer ? "block" : "none" }} />
                                            Trailer
                                        </li>
                                    </ul>
                                    <div className="description-content" style={{display: toggle.description ? "block" : "none"}}>
                                        <p>{movie.detail}</p>
                                    </div>
                                    <div className="trailer-content" style={{display: toggle.trailer ? "block" : "none"}}>
                                        <iframe src={movie.trailer} frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Container>
        </main>
    )
}

export default MovieDetail
