import { Container } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { getDetailEventRequest } from '../../redux/action/eventAction'

function EventDetail() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { eventDetail } = useSelector(state => state.event)
    
    useEffect(() => {
        dispatch(getDetailEventRequest(slug));
    }, [])

    return (
        <main className="main__detailEvent">
            <Container>
                {eventDetail.map(event => {
                    return (
                        <div className="main__detailEvent__wrapper">
                            <div className="main__detailEvent__wrapper__title">
                                <h2>{event.title}</h2>
                            </div> 
                            <div className="main__detailEvent__wrapper__content">
                                <div className="main__detailEvent__wrapper__content-img">
                                    <img src={event.avatar} alt={event.title}/>
                                </div>
                                <div 
                                    className="main__detailEvent__wrapper__content-info"
                                    dangerouslySetInnerHTML={{ __html: event.detail?.join("")}}
                                ></div>
                            </div>
                        </div>
                    )
                    })
                }
            </Container>
        </main>
    )
}

export default EventDetail
