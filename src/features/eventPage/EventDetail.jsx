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
        <main className="detailEvent">
            <Container>
                {eventDetail.map(event => {
                    return (
                        <div className="detailEvent__content">
                            <div className="detailEvent__content__title">
                                <h2>{event.title}</h2>
                            </div> 
                            <div className="detailEvent__content__info">
                                <div className="info__img">
                                    <img src={event.avatar} alt={event.title}/>
                                </div>
                                <div 
                                    className="info__description"
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
