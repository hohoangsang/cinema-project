import React, { useEffect } from 'react'
import { Container, Box } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import {useSelector, useDispatch} from 'react-redux';
import { getEventRequest } from '../../redux/action/eventAction';
import calenderIcon from '../../assets/img/calendar-icon-smaill.png'
import {Link} from 'react-router-dom';

function EventPage() {
    const eventData = useSelector(state => state.event.event);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEventRequest());
    }, [])

    const eventItem = eventData.map(event => {
        return(
            <li className="event-item">
                <div className="event-item--wrapper">
                    <Box className="event-item--wrapper__poster" boxShadow={10}>
                        <Link to={`/news/${event._id}`}>
                            <img src={event.image} alt={event.name}/>
                        </Link>
                    </Box>
                    <div className="event-item--wrapper__releaseDay">
                        <img src={calenderIcon} alt=""/>
                        <p>{event.releaseDay}</p>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <main className="main__event">
            <Container>
                <div className="main__event__title">
                    <h3>Event</h3>
                </div>
                <div className="main__event__list">
                    <ul>
                        {eventItem}
                    </ul>
                </div>
            </Container>
        </main>
    )
}

export default EventPage
