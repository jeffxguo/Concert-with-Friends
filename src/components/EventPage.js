import { Typography } from "@material-ui/core";
import CardList from "./CardList";
import background from "../images/eventPage.jpg";

export default function EventPage() {
    return (
        <div style={{ margin: "2rem 20rem", textAlign: "left" }}>
            <div style={{
                backgroundImage: `url(${background})`,
                height: "50vh", width: "100%",
                backgroundSize: "cover"
            }}></div>
            <Typography variant="h1" style={{ margin: "1em 2rem" }}>Upcoming Events</Typography>
            <CardList />
        </div>
    )
}