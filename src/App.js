import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = 'Welcome to the new blog';
  
  return (
    <div className="App">
      <div className="content">

        <Navbar />
          <div className="content">
            <Home />
          </div>

      </div>
    </div>

  );
}
export default App;
