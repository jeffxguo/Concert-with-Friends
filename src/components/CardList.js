import { useState, useEffect } from 'react'
import { testData } from '../testEvent'
import EventCard from './Card'
import React from 'react';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

export default function CardList() {
    const [data, setData] = useState(JSON.parse(testData).events);
    const [alertVisible, setAlertVisible] = useState(true);
    const alert = useSelector(state => state.alert);

    useEffect(() => {
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
      }, [alert]);

    return (
        <Fragment>
            <div>
            {alertVisible && alert.message &&
				<div className={`alert ${alert.type}`}>{alert.message}</div>
			}
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {data.map((event, i) => {
                return (
                    <div key={i} style={{ margin: "1.2em 1em" }}>
                        <EventCard id={event.id} title={event.name} address={event._embedded.venues[0].name} price="24.99" date={event.dates.start.dateTime} />
                    </div>
                )
            })}
        </div>
        </Fragment>
    )
}