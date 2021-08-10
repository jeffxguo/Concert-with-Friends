import { COLORS } from "../constants/Colors";
import background from "../images/landing.jpg";
import img1 from "../images/ag.jpeg";
import img2 from "../images/hs.jpeg";
import img3 from "../images/arctic.jpeg";
import { Link } from "react-router-dom";

export default function LandingPage() {

    return (
        <div>
            <div style={{
                backgroundImage: `url(${background})`,
                height: "80vh", width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <div style={{ backgroundColor: "#171717", width: "26vw", minWidth: 500, padding: "4em 6em 4em 2em", marginRight: "10%" }}>
                    <div style={{ color: "white", fontSize: "3.2rem", fontWeight: 700, textAlign: "left" }}><span style={{ color: COLORS.pink }}>CONCERTS</span> ARE BETTER WITH <span style={{ color: COLORS.pink }}>FRIENDS</span></div>
                    <div style={{ marginTop: "2em", color: "white", fontSize: "1.4em", textAlign: "left", fontWeight: 700 }}>WE GOT YOU COVERED ON BOTH</div>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", margin: " 4em 10%" }}>
                <div style={{ flex: 2, fontSize: "2.2rem", textAlign: "left", fontWeight: "700", margin: "1em 1em 0 0" }}>
                    Find <span style={{ color: COLORS.highlight }}>friends.</span> <br /> Connect on Social Media. <br /> Attend <span style={{ color: COLORS.highlight }}>concerts together.</span>
                    <br />
                    <Link to="/login">
                        <div style={{ fontSize: "1.2rem", fontWeight: 600, backgroundColor: COLORS.highlight, width: 160, color: "white", padding: ".5em", textAlign: "center", borderRadius: 4, marginTop: "2em" }}>
                            Join Now
                        </div>
                    </Link>
                </div>
                <div style={{ flex: 3, display: "flex", flexDirection: "row" }}>
                    <div style={{ flex: 2 }}>
                        <div style={{
                            backgroundImage: `url(${img1})`,
                            height: "40vh", width: "26vw",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginRight: "2em"
                        }}></div>

                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{
                            backgroundImage: `url(${img2})`,
                            height: "30vh", width: "20vw",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "flex-end"
                        }}></div>
                        <div style={{
                            backgroundImage: `url(${img3})`,
                            marginTop: "2em",
                            height: "30vh", width: "20vw",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "flex-end"
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
