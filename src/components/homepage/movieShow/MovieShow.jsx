import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getFilterMoviesRequest } from '../../../redux/action/moviesAction';
import { filterMovies } from '../../../redux/action/filterAction';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import iconFinger from '../../../assets/img/ico_finger.png'

function MovieShow() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { filterData } = useSelector(state => state.movies);
    const { status } = useSelector(state => state.filter); 

    useEffect(() => {
        dispatch(getFilterMoviesRequest());
    }, [dispatch, status])

    const handleChangeFilter = (status) => {
        dispatch(filterMovies(status))
    }
    
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", zIndex: "1000", transform: "translateX(-40px)"}}
                onClick={onClick}
            />
        );
      }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", zIndex: "1000", transform: "translateX(40px)"}}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 850,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
          ]
    }

    return (
        <div className="main__movieShow__content">
            <div className="main__movieShow__content__title">
                <h3>movie</h3>
            </div>
            <div className="main__movieShow__content__menu">
                <ul>
                    <li onClick = {() => handleChangeFilter("showing")}>
                        <img src={iconFinger} alt="icon finger" style = {{display: status==="showing" ? "block" : "none"}}/>
                        {t('header.navBottom.movies.now_showing')}
                    </li>
                    <li onClick = {() => handleChangeFilter("coming")}>
                        <img src={iconFinger} alt="icon finger" style = {{display: status==="coming" ? "block" : "none"}}/>
                        {t('header.navBottom.movies.coming_soon')}
                    </li>
                </ul>
            </div>
            <div className="main__movieShow__content__slide">
                <Slider {...settings}>
                    {
                        filterData.map(item => {
                            return(
                                <div className="slide-item">
                                    <img src={item.avatar} alt="movie" className="slide-item__img"/>
                                    <div className = "slide-item__content">
                                        <h3>{item.name}</h3>
                                        <div className="slide-item__content-btn">
                                            <Link to={`/movie/${item._id}`} className="detail-btn">{t('movies.view_detail')}</Link>
                                            <Link to="/" className="order-btn" style ={{display: status==="coming" ? "none" : "flex"}}>
                                                <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cate-booking.png" alt=""/>
                                                {t('movies.order')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default MovieShow
