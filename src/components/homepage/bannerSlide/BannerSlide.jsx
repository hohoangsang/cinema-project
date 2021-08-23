import React, { useEffect } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getBannerRequest } from '../../../redux/action/bannerAction'

function BannerSlide() {
    const dispatch = useDispatch();
    const { banner } = useSelector(state => state.banner);

    useEffect(() => {
        dispatch(getBannerRequest())
    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", transform: "translateX(-40px)", zIndex: "1000"}}
                onClick={onClick}
            />
        );
      }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", transform: "translateX(40px)", zIndex: "1000"}}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 4000
    }

    return (
        <div className="main__banner__content">
            <Slider {...settings}>
                {
                    banner.map(item => {
                        return (
                            <Link to="/" className = "banner-item">
                                <img src={item} alt="banner image"/>
                            </Link> 
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlide
