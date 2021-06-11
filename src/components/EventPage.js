import { Typography } from "@material-ui/core";
import CardList from "./CardList";
import background from "../images/eventPage.jpg";
import SearchBar from "./SearchBar";

export default function EventPage() {
    return (
        <div style={{ margin: "2em 10%", textAlign: "left" }}>
            <div style={{
                backgroundImage: `url(${background})`,
                height: "40vh", width: "100%",
                backgroundSize: "cover"
            }}></div>
            <SearchBar />
            <Typography variant="h1" style={{ margin: "1.5em .5em .5em .5em" }}>Upcoming Events</Typography>
            <CardList />
        </div>
    )
}