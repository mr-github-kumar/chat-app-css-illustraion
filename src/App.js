import './App.css';
import Mobile from './components/mobile/mobile';

function App() {
  return (
    <section className="App">
      <div className="back-gradient"></div>
      <div className="mobile-view">
        <Mobile/>
      </div>
      <div className="welcome-banner">
        <h1>Simple booking</h1>
        <p>
        Stay in touch with our dog walkers through the chat interface.This makes it easy to discuss arrangements and make bookings.Once the walk has been completed you can rate your walker and book again all through the chat. 
        </p>
      </div>  
    </section>
  );
}

export default App;
