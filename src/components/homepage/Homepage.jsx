import { Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import BannerSlide from './bannerSlide/BannerSlide';
import MovieShow from './movieShow/MovieShow';
import EventSlide from './eventSlide/EventSlide';

function Homepage() {
    return (
        <main className="main">
            <div className="main__menu">
                <Container>
                    <div className="main__menu__wrapper">
                        <ul>
                            <li>
                                <Link to="/" className="menu-item"></Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item"></Link>
                            </li>
                            <li> 
                                <Link to="/" className="menu-item"></Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item"></Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item"></Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item"></Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item"></Link>
                            </li>
                        </ul>
                        <div className="main__menu-underline"></div>
                    </div>
                </Container>
            </div>
            <div className="main__banner">
                <Container>
                    <BannerSlide></BannerSlide>
                </Container>
            </div>
            <div className="main__movieShow">
                <Container>
                    <MovieShow></MovieShow>
                </Container>
            </div>
            <div className="main__event">
                <Container>
                    <EventSlide></EventSlide>
                </Container>
            </div>
        </main>
    )
}

export default Homepage
