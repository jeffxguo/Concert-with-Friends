import { useState, useEffect } from 'react'
import { testData } from '../testEvent'
import EventCard from './Card'
import React from 'react';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

export default function CardList(props) {
    const [alertVisible, setAlertVisible] = useState(true);
    const alert = useSelector(state => state.alert);
    useEffect(() => {
        setTimeout(() => {
            setAlertVisible(false);
        }, 5000);
    }, [alert]);

    return (
        <Fragment>
            <div>
                {alertVisible && alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {props.events.map((event, i) => {
                    return (
                        <div key={i} style={{ margin: "2em 1.4em" }}>
                            <EventCard
                                id={event.id}
                                title={event.name}
                                price={event.priceRanges ? event.priceRanges[0].min : 0}
                                address={event._embedded.venues[0].name}
                                date={event.dates.start.dateTime}
                                img={event.images[0].url} />
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}