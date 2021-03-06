import { useEffect } from 'react'
import GroupCard from './GroupCard'
import React from 'react';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { alertActions } from '../actions/alert.actions';

export default function GroupCardList(props) {
    const alert = useSelector(state => state.alert);
    useEffect(() => {
        alertActions.clear();
    }, [alert]);

    return (
        <Fragment>
            <div>
                {alert.message &&
                    <div style={{ position: "fixed", zIndex: 100, width: "30vw", left: 0, textAlign: "center", bottom: 80, margin: "0 35vw 0 35vw" }} className={`alert ${alert.type}`}>{alert.message}</div>
                }
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {props.groups.map((group, i) => {
                    return (
                        <div key={i} style={{ margin: "2em 1.4em" }}>
                            <GroupCard
                                id={group.id}
                                title={group.name}
                                address={group._embedded.venues[0].name}
                                date={group.dates.start.dateTime}
                                img={group.images[0].url}
                                joined={group.joined}
                                handleClickLeave={props.handleClickLeave}
                                url={group.url}
                            />
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}