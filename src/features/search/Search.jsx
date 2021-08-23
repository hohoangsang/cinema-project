import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Search() {
    const { result } = useSelector(state => state.search);
    const { t } = useTranslation();

    const resultItem = result.map((movie, index) => {
        return (
            <div key={movie._id} className="main__search__list-item">
                <div className="main__search__list-item--image">
                    <Link to="/">
                        <img src={movie.avatar} alt={movie.name}/>
                    </Link>
                </div>
                <div className="main__search__list-item--info">
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
                        <Link to="/" style ={{display: movie.status === "coming" ? "none" : "flex"}}>
                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cate-booking.png" alt=""/>
                            <p>{t('movies.order')}</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <main className="main__search">
            <Container>
            <div className="main__search__title">
                {result.length > 0
                    ? ( <h2>{result.length} {t('search.results_searched')}</h2> )
                    : ( <h2>{t('search.nothing')}</h2>)
                }        
            </div>
            <div className="main__search__list">
                    {resultItem}
            </div>
            </Container>
        </main>  
    )
}

export default Search
