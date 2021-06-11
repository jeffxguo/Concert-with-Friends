import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";

export default function EventCard(event) {
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.card}>
                <CardMedia component='img' src="https://designshack.net/wp-content/uploads/placeholder-image.png" style={{
                    height: '13.5rem'
                }}/>
                <div className={classes.addButton}>
                    <IconButton style={{
                        backgroundColor: 'white',
                        color: 'black'
                    }}>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className={classes.priceTag}>
                    <Box borderRadius="borderRadius" className={classes.box}>
                        {event.price}
                    </Box>
                </div>
                <CardContent>
                    <div className={classes.date}>June 1st</div>
                    <div className={classes.details}>
                        <div className="event-title">
                            <Typography variant="h6">{event.title}</Typography>
                        </div>
                        <div className="event-address">
                            <Typography>{event.address}</Typography>
                        </div>
                    </div>
                </CardContent>
                <div>
                    <Button variant="contained" startIcon={<ConfirmationNumberIcon />}>
                        23
                    </Button>
                    <Button variant="contained" startIcon={<GroupIcon />}>
                        3
                    </Button>
                </div>
            </Card>
        </div>
    )
}

const useStyles = makeStyles({
    card: {
        position: 'relative',
        height: '24rem',
        width: '20rem'
    },
    addButton: {
        position: 'absolute',
        top: '20px',
        right: '15px',
    },
    priceTag: {
        position: 'absolute',
        top: '20px',
        left: '15px',
    },
    box: {
        backgroundColor: 'white',
        padding: '5px 9px',
        fontSize: '22px'
    },
    date: {
        position: 'absolute',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    details: {
        position: "relative",
        width: "12.5rem",
        left: "4.4rem",
        textAlign: "left",
    }
});