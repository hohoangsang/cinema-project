import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useSelector, useDispatch } from 'react-redux';
import { getEventRequest } from '../../../redux/action/eventAction'
import { Link } from 'react-router-dom'


function EventSlide() {
    const { event } = useSelector(state => state.event);
    const dispath = useDispatch();

    useEffect(() => {
        dispath(getEventRequest())
    }, [])

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
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
          ]
    }

    return (
        <div className="main__event__content">
            <div className="main__event__content__title">
                <h3>event</h3>
            </div>
            <div className="main__event__content__slide">
                <Slider {...settings}>
                    {
                        event.map(item => {
                            return (
                                <Link to="/" className="event-item">
                                    <img src={item.image} alt="event image"/>
                                </Link>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default EventSlide
