import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { EVENT_DETAIL_PATH, 
        EVENT_PATH, 
        LOG_IN_PATH, 
        MOVIE_COMING_PATH, 
        MOVIE_DETAIL_PATH, 
        MOVIE_SEARCH_PATH, 
        MOVIE_SHOWING_PATH, 
        REGISTER_PATH, 
        ROOT_PATH, 
        USER_PATH
} from '../../constant/route'
import Login from '../../features/auth/pages/login/Login'
import Register from '../../features/auth/pages/register/Register'
import EventDetail from '../../features/eventPage/EventDetail'
import EventPage from '../../features/eventPage/EventPage'
import MovieDetail from '../../features/moviePage/MovieDetail'
import MoviePage from '../../features/moviePage/MoviePage'
import Search from '../../features/search/Search'
import LayoutUserPage from '../../features/userPage/layout/Layout'
import { watchIsLogged } from '../../redux/action/authAction'
import Homepage from '../homepage/Homepage'
import Footer from '../patials/footer/Footer'
import Header from '../patials/header/Header'
import Loading from '../patials/loading/Loading'

export function ClientLayout() {
    const dispatch = useDispatch();
    const token = sessionStorage.getItem('access_token') || null;

    useEffect(() => {
        if (token !== null) {
            dispatch(watchIsLogged(token));
        }
    }, [])
    return (
        <>
            <Header></Header>
            <Switch>
                <Route exact path={ROOT_PATH}>
                    <Homepage></Homepage>
                </Route>
                <Route path={MOVIE_SHOWING_PATH}>
                    <MoviePage categories="showing"></MoviePage>
                </Route>
                <Route path={MOVIE_COMING_PATH}>
                    <MoviePage categories="coming"></MoviePage>
                </Route>
                <Route path={MOVIE_SEARCH_PATH}>
                    <Search></Search>
                </Route>
                <Route path={MOVIE_DETAIL_PATH}>
                    <MovieDetail></MovieDetail>
                </Route>
                <Route exact path={EVENT_PATH}>
                    <EventPage></EventPage>
                </Route>
                <Route path={EVENT_DETAIL_PATH}>
                    <EventDetail></EventDetail>
                </Route>
                <Route path={USER_PATH}>
                    <LayoutUserPage></LayoutUserPage>
                </Route>
                <Route path={LOG_IN_PATH}>
                    <Login></Login>
                </Route>
                <Route path={REGISTER_PATH}>
                    <Register></Register>
                </Route>
            </Switch>
            <Footer></Footer>   
        </>
    )
}