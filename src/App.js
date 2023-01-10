import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {

  const title = 'Welcome to the new blog';
  
  return (
    <Router>
      <div className="App">
        <div className="content">

          <Navbar />
            <div className="content">
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/create' element={<Create />}/>
                <Route path='/blogs/:id' element={<BlogDetails />}></Route>
              </Routes>
            </div>

        </div>
      </div>
    </Router>

  );
}
export default App;
