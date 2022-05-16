import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  MOVIE_COMING_PATH,
  MOVIE_SEARCH_PATH,
  MOVIE_SHOWING_PATH,
} from "../../constant/route";
import { filterMovies } from "../../redux/action/filterAction";
import { getFilterMoviesRequest } from "../../redux/action/moviesAction";
import { searchMovieRequest } from "../../redux/action/searchAction";

function MoviePage(props) {
  const { categories } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { filterData } = useSelector((state) => state.movies);
  const { status } = useSelector((state) => state.filter);
  const [input, setInput] = useState("");
  const history = useHistory();

  useEffect(() => {
    dispatch(filterMovies(categories));
    dispatch(getFilterMoviesRequest());
  }, [categories]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input !== "") {
      dispatch(searchMovieRequest(input));
      setInput("");
      history.push(MOVIE_SEARCH_PATH);
    }
  };

  const movieItem = filterData.map((movie, index) => {
    return (
      <div key={movie._id} className="main__moviePage__movieList-item">
        <div className="main__moviePage__movieList-item--image">
          <Link to={`/movie/${movie._id}`}>
            <img src={movie.avatar} alt={movie.name} />
          </Link>
        </div>
        <div className="main__moviePage__movieList-item--info">
          <h4 className="movie-name">{movie.name}</h4>
          <div className="movie-info">
            <span className="movie-info--bold">Thể loại: </span>
            <span className="movie-info--normal">{movie.category}</span>
          </div>
          <div className="movie-info">
            <span className="movie-info--bold">Thời lượng: </span>
            <span className="movie-info--normal">{movie.runningTime} phút</span>
          </div>
          <div className="movie-info">
            <span className="movie-info--bold">Khởi chiếu: </span>
            <span className="movie-info--normal">{movie.releaseDate}</span>
          </div>
          <div className="order-btn">
            <Link
              to="/"
              style={{ display: status === "coming" ? "none" : "flex" }}
            >
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cate-booking.png"
                alt=""
              />
              <p>{t("movies.order")}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main className="main__moviePage">
      <Container>
        <div className="main__moviePage__title">
          <h2>
            {categories === "showing"
              ? t("header.navBottom.movies.now_showing")
              : t("header.navBottom.movies.coming_soon")}
          </h2>
          <ul>
            <li>
              {categories === "showing" ? (
                <Link to={MOVIE_COMING_PATH}>
                  {t("header.navBottom.movies.coming_soon")}
                </Link>
              ) : (
                <Link to={MOVIE_SHOWING_PATH}>
                  {t("header.navBottom.movies.now_showing")}
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="main__moviePage__search">
          <form
            className="main__moviePage__search__form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              type="text"
              placeholder={t("header.navBottom.movies.search")}
              onChange={(event) => setInput(event.target.value)}
              value={input}
            ></input>
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="main__moviePage__movieList">{movieItem}</div>
      </Container>
    </main>
  );
}

export default MoviePage;
