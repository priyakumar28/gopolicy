import FormPage from './component/FormPage'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ViewDetails from './component/ViewDetails';
import Weather from './component/Weather';

function App() {
  return (
  <Router>
    <Routes>
      {/* <Route path='/' element={<FormPage/>} /> */}
      <Route path='/' element={<Weather/>}/>
      <Route path='/details' element={<ViewDetails/>} />
    </Routes>

  </Router>


  );
}

export default App;
