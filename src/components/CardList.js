import { useState } from 'react'
import { testData } from '../testEvent'
import EventCard from './Card'
export default function CardList() {
    const [data, setData] = useState(JSON.parse(testData).events)
    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {data.map((event, i) => {
                return (
                    <div key={i} style={{ margin: "1.2em 1em" }}>
                        <EventCard title={event.name} address={event._embedded.venues[0].name} price="24.99" date={event.dates.start.dateTime} />
                    </div>
                )
            })}
        </div >
    )
}