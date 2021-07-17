import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../constants/Colors';
import { IconButton, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import React from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")
  const [city, setCity] = useState("")
  const [startDate, setStartDate] = useState(new Date().setHours(0, 0))
  const [endDate, setEndDate] = useState(null)

  const handleStartDateChange = (date) => {
    setStartDate(moment(date).format('YYYY-MM-DDTHH:mm:ssZ'));
  };

  const handleEndDateChange = (date) => {
    setEndDate(moment(date.setHours(23, 59)).format('YYYY-MM-DDTHH:mm:ssZ'));
  };

  const classes = useStyles();
  const cities = [
    "Vancouver",
    "Montreal",
    "Calgary",
    "Toronto"
  ]
  const genre = [
    {
      "id": "",
      "name": "All"
    },
    {
      "id": "KnvZfZ7vAev",
      "name": "Pop"
    },
    {
      "id": "KnvZfZ7vAv6",
      "name": "Country"
    },
    {
      "id": "KnvZfZ7vAeA",
      "name": "Rock"
    },
    {
      "id": "KZazBEonSMnZfZ7v6a6",
      "name": "Punk"
    },
    {
      "id": "KnvZfZ7vAvt",
      "name": "Metal"
    },
    {
      "id": "KZFzBErXgnZfZ7vA7A",
      "name": "Orchestra"
    },
    {
      "id": "KZazBEonSMnZfZ7va1d",
      "name": "Trap"
    },
    {
      "id": "KnvZfZ7vAv1",
      "name": "Hip-Hop/Rap"
    },
    {
      "id": "KZazBEonSMnZfZ7vkE6",
      "name": "International Pop"
    },
  ]

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
          <Select
            style={{
              color: "white",
              marginTop: "1em",
              marginRight: "2em",
              width: "12em"
            }}
            className={classes.select}
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}
            native
            onChange={event => { setCity(String(event.target.value).toLowerCase()) }}
            placeholder="city"
          >
            {cities.map(c =>
              <option value={c}>{c}</option>
            )}
          </Select>
        </div>
        <div style={{ textAlign: "left" }}>
          <Typography style={{ fontWeight: "600" }}>Genre</Typography>

          <Select
            style={{
              color: "white",
              marginTop: "1em",
              marginRight: "2em",
              width: "12em"
            }}
            className={classes.select}
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}
            native
            onChange={event => { setSelectedGenre(event.target.value) }}
            placeholder="genre"
          >
            {genre.map(g =>
              <option value={g.id}>{g.name}</option>
            )}
          </Select>
        </div>
        <div style={{ textAlign: "left" }}>
          <Typography style={{ fontWeight: "600" }}>From</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{marginTop: "1em",
                marginRight: "2em",
                width: "12em",}} 
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="start-date-picker"
                value={startDate}
                onChange={handleStartDateChange}
                InputProps={{ className: classes.datePickerInput }}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                  className: classes.keyboardButton
                }}
              />
            </MuiPickersUtilsProvider>
        </div>
        <div style={{ textAlign: "left" }}>
          <Typography style={{ fontWeight: "600" }}>To</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{marginTop: "1em",
                marginRight: "2em",
                width: "12em",}} 
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="end-date-picker"
                value={endDate}
                onChange={handleEndDateChange}
                InputProps={{ className: classes.datePickerInput }}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                  className: classes.keyboardButton
                }}
              />
            </MuiPickersUtilsProvider>
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
        }}
          onClick={() => props.handleSearch(searchTerm, city, selectedGenre, moment(startDate).format('YYYY-MM-DDTHH:mm:ssZ'), endDate)}
        >
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  select: {
    '&:before': {
      borderColor: "white",
    },
    '&:after': {
      borderColor: "white",
    }
  },
  icon: {
    fill: "white",
  },
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
  },
  datePickerInput: {
    color: "white",
    borderBottom: "1px white solid",
    backgroundColor: COLORS.darkBlue,
  },
  keyboardButton: {
    color: "white"
  }
});


export default SearchBar;