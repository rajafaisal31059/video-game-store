import Home from './screens/home';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
  <Navbar/>
   <Home username={'Faisal'}></Home>
    </div>
  );
}

export default App;
