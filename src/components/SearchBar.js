import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../constants/Colors';
import { IconButton, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }} className={classes.searchDiv}>
      <Typography variant="h1" style={{ marginBottom: "1em" }}>Find an Event Near You</Typography>
      <div className="row no-gutters justify-content-md-center">
        <div style={{ textAlign: "left" }}>
          <Typography style={{ fontWeight: "600" }}>Keywords</Typography>
          <input className={classes.input} classes={{ focused: classes.inputFocused }} type="text"
            placeholder="Event Name"
            onChange={event => { setSearchTerm(event.target.value) }} />
        </div>
        <div style={{ textAlign: "left" }}>
          <Typography style={{ fontWeight: "600" }}>City</Typography>
          <input className={classes.input} classes={{ focused: classes.inputFocused }} type="text"
            placeholder="City"
            onChange={event => { setSearchTerm(event.target.value) }} />
        </div>
        <div style={{ textAlign: "left" }}>
          <Typography style={{ fontWeight: "600" }}>Genre</Typography>
          <input className={classes.input} classes={{ focused: classes.inputFocused }} type="text"
            placeholder="Genre"
            onChange={event => { setSearchTerm(event.target.value) }} />
        </div>
        <div style={{
          padding: ".8em .5em",
          marginTop: "2em",
          height: 50,
          width: 50,
          borderRadius: 4,
          backgroundColor: COLORS.highlight,
          color: "white",
          justifyContent: "center"
        }}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  searchDiv: {
    backgroundColor: COLORS.darkBlue,
    color: "white",
    margin: "-6em 5% 2em 5%",
    borderRadius: "4px",
    padding: "3em"
  },
  input: {
    marginTop: "1em",
    marginRight: "2em",
    color: "white",
    fontSize: "1.2em",
    border: "none",
    borderBottom: "1px white solid",
    outline: "none",
    backgroundColor: COLORS.darkBlue,
  }
  ,
  inputFocused: {
    outline: "none",
    border: "none"
  }
});

export default SearchBar;