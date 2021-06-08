import './App.css';
import EventPage from './components/EventPage';
import Navbar from './components/Navbar';
import JSONData from './components/MOCK_DATA.json';
import {useState} from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="SearchBar"> 
        <input type = "text" 
        placeholder="Search.."  
        onChange= {event => {setSearchTerm (event.target.value)}}/>
        {JSONData.filter((val)=>{
          if (searchTerm == ""){
            return val
          } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
          }        }).map((val,key)=>{
            return <div>
            {val.first_name}</div>
        })}
        </div>
    );
}

export default App;