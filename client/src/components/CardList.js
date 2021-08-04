import { useEffect, useState } from 'react'
import EventCard from './Card'
import React from 'react';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { alertActions } from '../actions/alert.actions';

export default function CardList(props) {
    const alert = useSelector(state => state.alert);

    return (
        <Fragment>

            <div>
                {alert.message &&
                    <div style={{ position: "fixed", zIndex: 100, width: "30vw", left: 0, textAlign: "center", bottom: 80, margin: "0 35vw 0 35vw" }} className={`alert ${alert.type}`}>{alert.message}</div>
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
                                img={event.images[0].url}
                                joined={event.joined}
                                memberNum={event.memberNum} />
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}