import './App.css';
import EventPage from './components/EventPage';
import Navbar from './components/Navbar';
import EventCard from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EventPage />
      <EventCard title="Billie Eillish - Happier Than Ever" address="868 Granville St" price="24.99"/>
    </div>
  );
}

export default App;
