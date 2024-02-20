
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import SingalMovie from './SingalMovie';
import Error from './Error';
import { Toaster } from "react-hot-toast";

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<SingalMovie/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
    <Toaster position="top-right"/>
    </>
  )
}

export default App
